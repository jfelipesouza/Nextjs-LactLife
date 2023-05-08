import React, { useState, useEffect } from "react";
import {
  Container,
  ErrorCode,
  ErrorDescription,
  ErrorLink,
} from "@/styles/pages/404";
import { useRouter } from "next/router";

const INITIAL_TIME_TO_REDIRECT = 10;

const NotFoundScreen: React.FC = () => {
  const router = useRouter();

  const redirect = () => {
    router.back();
  };

  useEffect(() => {
    setTimeout(() => {
      redirect();
    }, INITIAL_TIME_TO_REDIRECT * 1000);
  }, []);

  return (
    <Container>
      <ErrorCode>404</ErrorCode>
      <ErrorDescription>
        Página não encontrada, <ErrorLink onClick={redirect}>voltar!</ErrorLink>
      </ErrorDescription>
    </Container>
  );
};

export default NotFoundScreen;
