import React, { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { CommunityContainer, CommunityTitle } from "@/styles/pages/Community";
import ModalFormRegisterOrLogin from "@/components/ModalFormRegisterOrLogin";
import { ChatCommunity } from "@/components/ChatCommunity";

const CommunityScreen: React.FC = () => {
  const [chat, setChat] = useState<Socket>();
  const [modalVisible, setModalVisible] = useState(false);

  const connectionInRoom = async () => {
    const socket = io(
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3001"
    );

    console.log(socket);
    if (chat !== socket) setChat(socket);
  };

  const isPossibilytySendMessage = () => {
    if (!sessionStorage.getItem("token")) {
      setModalVisible(true);
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    connectionInRoom();
  }, []);

  if (chat)
    return (
      <>
        <Header />
        <CommunityContainer>
          <CommunityTitle>Comunidade</CommunityTitle>
          <ChatCommunity
            room={chat}
            sendMessageFunction={isPossibilytySendMessage}
          />
        </CommunityContainer>
        <ModalFormRegisterOrLogin
          closeModal={() => setModalVisible(false)}
          visible={modalVisible}
        />
        <Footer />
      </>
    );
  return <div>carregando</div>;
};

export default CommunityScreen;
