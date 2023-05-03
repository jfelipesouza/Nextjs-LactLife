import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100vw;
  min-height: 40vh;
  display: flex;
  background-color: ${({ theme }) => theme.colors.secundary};
  gap: 1rem;
  padding: 0 2rem;
  flex-wrap: wrap;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 4rem 2rem;
    gap: 4rem;
  }
`;

type FooterSectionProps = {
  flex?: number;
  borderRight?: true;
  section?: number;
};

export const FooterSection = styled.div<FooterSectionProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  flex: ${({ flex }) => (flex ? flex : 1)};
  justify-content: center;

  :after {
    position: absolute;
    content: "";
    right: 0;
    width: 2px;
    height: 80%;
    background-color: white;
    display: ${({ borderRight }) => (borderRight ? "flex" : "none")};
  }

  @media screen and (max-width: 1200px) {
    display: ${({ section }) => (section === 3 ? "none" : "flex")};
  }
  @media screen and (max-width: 900px) {
    :after {
      display: none;
    }
  }
`;

export const LogoContainer = styled.div`
  height: 100px;
  width: 90%;
  position: relative;

  .image {
    object-fit: fill;
  }
`;

export const Logo = styled(Image)`
  height: 100%;
  width: 100%;
  position: absolute;
  object-fit: cover;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  color: white;
  margin-left: 2rem;

  @media screen and (max-width: 900px) {
    margin: 0;
  }
`;

export const PagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  padding-left: 2rem;

  @media screen and (max-width: 900px) {
    padding-left: 0;
  }
  @media screen and (max-width: 600px) {
    margin-top: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Pages = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.125rem;
  position: relative;
  width: max-content;
  text-transform: capitalize;

  :after {
    position: absolute;
    content: "";
    bottom: -0.5rem;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.contrast};
    transition: all 0.4s linear;
  }

  :hover {
    :after {
      width: 100%;
    }
  }
`;

export const LogoIconContainer = styled.div`
  position: relative;
  height: 150%;
  width: 100%;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
