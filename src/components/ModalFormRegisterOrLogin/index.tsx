import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  CloseIcon,
  ModalAction,
  ModalForm,
  ModalFormContainer,
  ModalFormContent,
  ModalFormHeader,
  ModalFormHeaderButtons,
  ModalTextField,
  ModalTextFieldInput,
  ModalTextFieldLabel,
} from "./styled";
import { api } from "@/utils/axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type ModalProps = {
  visible?: boolean;
  closeModal: () => void;
};

const formTypes = ["login", "register"];
const createUserFormSchema = z.object({
  email: z.string().email().nonempty("Campo obrigatorio").toLowerCase().trim(),
  password: z.string().nonempty("Campo obrigatorio").toLowerCase().trim(),
  nickname: z.string().nonempty("Campo obrigatorio").trim(),
});
const singInFormSchema = z.object({
  email: z.string().email().nonempty("Campo obrigatorio").toLowerCase().trim(),
  password: z.string().nonempty("Campo obrigatorio").toLowerCase().trim(),
});

type CreateFormData = z.infer<typeof createUserFormSchema>;
type SignInFormData = z.infer<typeof singInFormSchema>;

const ModalFormRegisterOrLogin: React.FC<ModalProps> = ({
  visible,
  closeModal,
}) => {
  const [firstUser, setFirstUser] = useState(true);

  const { register, handleSubmit, reset } = useForm<CreateFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const {
    register: registerSingIn,
    handleSubmit: handleSubmitSingIn,
    reset: resetSingIn,
  } = useForm<SignInFormData>({
    resolver: zodResolver(singInFormSchema),
  });

  const resetAll = () => {
    resetSingIn();
    reset();
  };
  const handleFocusInButton = (focusId: string) => {
    if (focusId === "login") {
      setFirstUser(true);
      resetAll();
    } else {
      setFirstUser(false);
      resetAll();
    }
  };

  const hanndleCreateUser = async (dataValues: CreateFormData) => {
    const { data, status } = await api.post("users/register", dataValues);
    if (status === 201 && data.token) {
      sessionStorage.setItem("token", data.token);
      closeModal();
    } else {
      alert(data.message);
    }
    resetAll();
    console.log(data.message);
  };

  const handleSingIN = async (dataValues: SignInFormData) => {
    console.log(dataValues);
    const { data, status } = await api.post("users/singIN", dataValues);
    if (status === 200 && data.token) {
      sessionStorage.setItem("token", data.token);
      closeModal();
    } else {
      alert(data.message);
    }

    resetAll();
    console.log(data.message);
  };

  return (
    <AnimatePresence>
      {visible && (
        <ModalFormContainer
          initial={{ opacity: 0, zIndex: 1 }}
          animate={{ opacity: 1, zIndex: 99, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, zIndex: 1 }}
        >
          <ModalForm
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.3 } }}
            exit={{ scale: 0 }}
          >
            <ModalFormHeader>
              {formTypes.map((type) => (
                <ModalFormHeaderButtons
                  key={type}
                  onClick={() => handleFocusInButton(type)}
                  visible={type === "login" ? firstUser : !firstUser}
                >
                  {type}
                </ModalFormHeaderButtons>
              ))}
            </ModalFormHeader>
            {!firstUser ? (
              <ModalFormContent onSubmit={handleSubmit(hanndleCreateUser)}>
                <ModalTextField>
                  <ModalTextFieldLabel>E-mail</ModalTextFieldLabel>
                  <ModalTextFieldInput
                    type={"email"}
                    placeholder={"Digite seu email..."}
                    {...register("email")}
                  />
                </ModalTextField>
                <ModalTextField>
                  <ModalTextFieldLabel>Nickname</ModalTextFieldLabel>
                  <ModalTextFieldInput
                    type={"text"}
                    placeholder={"Digite seu nome"}
                    {...register("nickname")}
                  />
                </ModalTextField>
                <ModalTextField>
                  <ModalTextFieldLabel>Senha</ModalTextFieldLabel>
                  <ModalTextFieldInput
                    type={"password"}
                    placeholder={"Digite a sua senha"}
                    {...register("password")}
                  />
                </ModalTextField>

                <ModalAction type="submit">Enviar</ModalAction>
              </ModalFormContent>
            ) : (
              <ModalFormContent onSubmit={handleSubmitSingIn(handleSingIN)}>
                <ModalTextField>
                  <ModalTextFieldLabel>E-mail</ModalTextFieldLabel>
                  <ModalTextFieldInput
                    type={"email"}
                    placeholder={"Digite seu email..."}
                    {...registerSingIn("email")}
                  />
                </ModalTextField>
                <ModalTextField>
                  <ModalTextFieldLabel>Senha</ModalTextFieldLabel>
                  <ModalTextFieldInput
                    type={"password"}
                    placeholder={"Digite a sua senha"}
                    {...registerSingIn("password")}
                  />
                </ModalTextField>
                <ModalAction type="submit">Enviar</ModalAction>
              </ModalFormContent>
            )}
          </ModalForm>
          <CloseIcon onClick={closeModal} />
        </ModalFormContainer>
      )}
    </AnimatePresence>
  );
};

export default ModalFormRegisterOrLogin;
