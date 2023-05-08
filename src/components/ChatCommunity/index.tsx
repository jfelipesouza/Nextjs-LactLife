import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Socket } from "socket.io-client";
import { z } from "zod";
import jwt from "jwt-decode";

import { UserDTO } from "@/@types/user";
import {
  ChatContainer,
  ChatFootter,
  ChatHeader,
  ChatMessageInput,
  ChatMessageItem,
  ChatMessageItemAuthor,
  ChatMessageItemText,
  ChatMessagesContainer,
  ChatSendMessageButton,
} from "./styled";
import { MdSend } from "react-icons/md";

type ChatCommunityProps = {
  sendMessageFunction: () => boolean;
  room: Socket;
};

const MessageSchema = z.object({
  message: z.string().trim().nonempty(),
});

type MessageForm = z.infer<typeof MessageSchema>;

export const ChatCommunity: React.FC<ChatCommunityProps> = ({
  sendMessageFunction,
  room,
}) => {
  const { register, handleSubmit, reset } = useForm<MessageForm>();
  const ref = useRef<HTMLDivElement>();
  const [authUser, setAuthUser] = useState<string>("");
  const [usersOnline, setUsersOnline] = useState<number>(0);
  const [messages, setMessages] = useState<
    {
      userId: string;
      message: { text: string; dateTime: string };
      author: string;
    }[]
  >([]);

  const handleConnectUserInRoom = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const jwtDecode: { user: UserDTO } = jwt(token);
      console.log(jwtDecode.user);
      setAuthUser(jwtDecode.user.id);
      const user = {
        userId: jwtDecode.user.id,
        nickname: jwtDecode.user.profile.nickname,
      };
      room.emit("set_user", user);
      return;
    }
    alert("erro");
  };
  const handleSendMessage = async (data: MessageForm) => {
    if (data.message.trim() === "") {
      const auth = sendMessageFunction();
      return;
    }
    const auth = sendMessageFunction();
    if (auth) {
      await handleConnectUserInRoom();
      room.emit("message", { message: data.message });
      reset();
    }
  };

  useEffect(() => {
    room.on("received_message", (data) => {
      setMessages((current) => [...current, data]);
    });

    room.on("numberOfUser", (number) => {
      setUsersOnline(number.numberOfUser);
    });

    return () => {
      room.off("received_message");
      room.off("numberOfUser");
    };
  }, [room]);

  return (
    <ChatContainer>
      <ChatHeader>{usersOnline} online</ChatHeader>
      <ChatMessagesContainer>
        {messages.map((data, index) => (
          <ChatMessageItem
            invert={data.userId === authUser}
            key={data.author + data.message.dateTime + data.message.text}
          >
            <ChatMessageItemAuthor>{data.author}</ChatMessageItemAuthor>
            <ChatMessageItemText invert={data.userId === authUser}>
              {data.message.text}
            </ChatMessageItemText>
          </ChatMessageItem>
        ))}
        <div ref={ref as any} />
      </ChatMessagesContainer>
      <ChatFootter onSubmit={handleSubmit(handleSendMessage)}>
        <ChatMessageInput
          placeholder="Digite a sua mensagem..."
          {...register("message")}
        />
        <ChatSendMessageButton type={"submit"}>
          <MdSend className="icon" />
        </ChatSendMessageButton>
      </ChatFootter>
    </ChatContainer>
  );
};
