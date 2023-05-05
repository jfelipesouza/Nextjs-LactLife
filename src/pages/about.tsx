import React from "react";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

import {
  BannerContainer,
  BannerImage,
  InformationParagraph,
  InformationSection,
  InformationSubtitle,
  InformationTitle,
  MainContainer,
  QuestionCardInformation,
  QuestionCards,
  QuestionCardsContainer,
  QuestionCardsTitle,
  QuestionLink,
  QuestionsSection,
  QuestionTilte,
} from "@/styles/pages/About";

const AboutScreen: React.FC = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <BannerContainer>
          <BannerImage
            alt="homem com copo de leite com dor de barriga por que é intolerante"
            src={"/assets/images/mainBanner.svg"}
            fill
            loading="lazy"
          />
        </BannerContainer>

        <InformationSection>
          <InformationTitle>
            O que é Intolerância <br />a Lactose?
          </InformationTitle>

          <InformationParagraph>
            Intolerância à lactose é a incapacidade de digerir a lactose (açúcar
            do leite). O problema é resultado da deficiência ou ausência de uma
            enzima intestinal chamada lactase. Esta enzima possibilita decompor
            o açúcar do leite em carboidratos mais simples, para a sua melhor
            absorção.
          </InformationParagraph>
          <InformationParagraph>
            É importante estabelecer a diferença entre alergia ao leite e
            intolerância à lactose. A alergia é uma reação imunológica adversa
            às proteínas do leite, que se manifesta após a ingestão de uma
            porção, por menor que seja, de leite ou derivados. A mais comum é a
            alergia ao leite de vaca, que pode provocar alterações no intestino,
            na pele e no sistema respiratório (tosse e bronquite, por exemplo).
          </InformationParagraph>

          <InformationSubtitle>Causas:</InformationSubtitle>
          <InformationParagraph>
            – deficiência congênita da enzima: a criança nasce com um defeito
            genético que impossibilita a produção da lactase;
          </InformationParagraph>
          <InformationParagraph>
            – diminuição na produção da lactase em conseqüência de doenças
            intestinais;
          </InformationParagraph>
          <InformationParagraph>
            – deficiência primária: ocorre diminuição da produção da lactase
            como consequência do envelhecimento.
          </InformationParagraph>
        </InformationSection>

        <QuestionsSection>
          <QuestionTilte>Dúvidas</QuestionTilte>
          <QuestionCardsContainer>
            <QuestionCards>
              <QuestionCardsTitle>
                Há níveis de intolerância?
              </QuestionCardsTitle>
              <QuestionCardInformation>
                A quantidade de lactose necessária para desencadear os sintomas
                varia de indivíduo para indivíduo...
              </QuestionCardInformation>
            </QuestionCards>
            <QuestionCards>
              <QuestionCardsTitle>Tipos de intolerância</QuestionCardsTitle>
              <QuestionCardInformation>
                Intolerância Primária: Esta é a mais comum. Desenvolve-se ao
                longo da vida e é crônica, devido a diminuição natural e
                progressiva da lactase...
              </QuestionCardInformation>
            </QuestionCards>
            <QuestionCards>
              <QuestionCardsTitle>
                Há níveis de intolerância?
              </QuestionCardsTitle>
              <QuestionCardInformation>
                A quantidade de lactose necessária para desencadear os sintomas
                varia de indivíduo para indivíduo...
              </QuestionCardInformation>
            </QuestionCards>
          </QuestionCardsContainer>

          <QuestionLink href={"/questions"}>Saiba mais</QuestionLink>
        </QuestionsSection>
      </MainContainer>
      <Footer />
    </>
  );
};

export default AboutScreen;
