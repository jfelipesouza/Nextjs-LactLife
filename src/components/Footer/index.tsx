import React from "react";

import { footerLinks } from "../../utils/mocks/footer";
import {
  FooterContainer,
  FooterSection,
  Logo,
  LogoContainer,
  LogoIconContainer,
  Pages,
  PagesContainer,
  Title,
} from "./styled";

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterSection section={1} borderRight flex={1}>
        <LogoContainer>
          <Logo className="image" alt="" src={"/assets/images/logo.svg"} fill />
        </LogoContainer>
      </FooterSection>
      <FooterSection section={2} flex={2}>
        <Title>Páginas</Title>
        <PagesContainer>
          {footerLinks.map((element) => (
            <Pages key={element.id + element.title} href={element.ref}>
              {element.title}
            </Pages>
          ))}
        </PagesContainer>
      </FooterSection>
      <FooterSection section={3} flex={1}>
        <LogoIconContainer>
          <Logo alt="" src={"/assets/images/logoIcon.svg"} fill />
        </LogoIconContainer>
      </FooterSection>
    </FooterContainer>
  );
};
