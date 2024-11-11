import { useState, useEffect } from "react";
import { CardContainer, Card } from "./styles";
import { cards } from "../../types/Types";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

interface ICards {
  selectedTech: string[];
}

const techColors: Record<string, string[]> = {
  JavaScript: ["#DAA520", "#B8860B"],// Amarillo para JavaScript
  TypeScript: ["#007ACC", "#3399FF"], // Azul para TypeScript
  Python: ["#306998", "#4B8BBE"], // Azul para Python
  React: ["#61DAFB", "#00BFFF"], // Cian para React
  "C#": ["#68217A", "#8A2BE2"], // Púrpura para C#
};

const Cards: React.FC<ICards> = ({ selectedTech }: ICards) => {
  const [onHover, setOnHover] = useState<boolean>(false);
  const [isOpenCard, setIsOpenCard] = useState<boolean>(false);

  const colorChange = () => {
    setOnHover(!onHover);
  };

  // Controla la apertura de la card
  useEffect(() => {
    setIsOpenCard(selectedTech.length > 0);
  }, [selectedTech]);

  return (
    <CardContainer>
      <AnimatePresence>
        {cards
          .filter((card) => selectedTech.includes(card.title))
          .map((card) => (
            <Card
              key={card.id}
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1, rotate: 360 }}
              exit={{ x: 300, opacity: 0 }}
              whileHover={{ scale: 2 }}
              transition={{
                x: { duration: 0.5, type: "spring", stiffness: 10 },
                opacity: { duration: 0.5, delay: 0.5 },
                rotate: { duration: 0.2 },
              }}
              onMouseEnter={colorChange}
              onMouseLeave={colorChange}
            >
              <h2>{card.title}</h2>
              <div style={{ display: "inline", wordWrap: "break-word" }}>
                {card.description.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ scale: 1, color: techColors[card.title][0] }} 
                    animate={
                      isOpenCard
                        ? {
                            scale: [1, 2, 1], 
                            color: techColors[card.title], 
                            transition: {
                              duration: 0.6,
                              delay: index * 0.1, 
                              repeat: 1,
                              repeatType: "reverse", 
                            },
                          }
                        : {}
                    }
                    whileHover={{ scale: 1.5 }}
                    style={{
                      display: "inline-block",
                      marginRight: "4px",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </Card>
          ))}
      </AnimatePresence>
    </CardContainer>
  );
};

export default Cards;
