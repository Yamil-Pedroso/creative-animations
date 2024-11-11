import styled from "styled-components";
import { motion } from "framer-motion";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  height: 15rem;
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  //box-shadow: 0 4px 3rem 2px rgba(239, 43, 112, 0.4);

    &:hover {
        cursor: pointer;
        z-index: 1;
        //background-color: #8a8383;
    }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }
  }

  h2 {
    margin: 1rem;
    font-size: 1.5rem;
  }

  p {
    margin: 1rem;
    font-size: 1rem;
    font-weight: 400;
  }
`;
