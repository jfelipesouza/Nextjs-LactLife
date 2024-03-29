import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  height: 422.19px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.gray};
  text-decoration: none;
  cursor: pointer;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;
export const CardInformation = styled.div`
  width: 100%;
  height: 20%;
  align-items: center;
  display: flex;

  justify-content: space-between;
  padding: 1rem;

  .restaurantName {
    font-size: 1.5rem;
    font-weight: 700;
    color: black;
  }

  .stars {
    display: flex;
    .star {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 2rem;
      transition: all 0.2s linear;
    }
    .star:hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  }
`;
