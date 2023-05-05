import React from "react";
import Image from "next/image";

import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  MainContainer,
  HeroSection,
  ActionLink,
  QuestionsSection,
  SectionTitle,
  QuestionItem,
  QuestionItemTitle,
  QuestionItemDescription,
} from "@/styles/pages/Questions";
import { questions } from "@/utils/mocks/questions";

const QuestionsPage: React.FC = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <HeroSection>
          <Image
            alt="banner"
            src={"/assets/images/cup1.svg"}
            id={"banner"}
            fill
            placeholder={"blur"}
            blurDataURL={"/assets/images/cup1.svg"}
          />
          <div id={"hero-section-question"}>
            <h2 id={"subtitle-question"}>Há tratamento?</h2>
            <h2 id={"subtitle-question"}>Ou é para a vida toda?</h2>
            <ActionLink href={"/about"}>Clique aqui para saber!</ActionLink>
          </div>
        </HeroSection>
        <QuestionsSection>
          <SectionTitle>Dúvidas</SectionTitle>
          {questions.map((question) => (
            <QuestionItem>
              <QuestionItemTitle>{question.title}</QuestionItemTitle>
              <QuestionItemDescription>
                {question.description}
              </QuestionItemDescription>
            </QuestionItem>
          ))}
        </QuestionsSection>
      </MainContainer>
      <Footer />
    </>
  );
};

export default QuestionsPage;
