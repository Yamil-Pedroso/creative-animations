import { useState } from "react";
import { TechContainer, TechBox } from "./styles";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaPython, FaReact } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import Cards from "../cards/Cards";
import { motion } from "framer-motion";

const TechVariants = {
  hidden: { x: -300, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const Tech: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string[]>([]);

  const handleTechClick = (tech: string) => {
    if (selectedTech.includes(tech)) {
      setSelectedTech(selectedTech.filter((selected) => selected !== tech));
    } else {
      setSelectedTech([...selectedTech, tech]);
    }
  };

  return (
    <>
      <Cards selectedTech={selectedTech} />
      <TechContainer>
        <TechBox
          onClick={() => {
            handleTechClick("Python");
          }}
          as={motion.div}
          initial={TechVariants.hidden}
          animate={TechVariants.visible}
          transition={{ duration: 0.5 }}
          whileHover={{ rotate: 360, scale: 1.5 }}
        >
          <FaPython size={50} />
        </TechBox>

        <TechBox
          onClick={() => handleTechClick("TypeScript")}
          as={motion.div}
          initial={TechVariants.hidden}
          animate={TechVariants.visible}
          transition={{ duration: 0.8 }}
          whileHover={{ rotate: 360, scale: 1.5 }}
        >
          <SiTypescript size={50} />
        </TechBox>

        <TechBox
          onClick={() => handleTechClick("JavaScript")}
          as={motion.div}
          initial={TechVariants.hidden}
          animate={TechVariants.visible}
          transition={{ duration: 1 }}
          whileHover={{ rotate: 360, scale: 1.5 }}
        >
          <IoLogoJavascript size={50} />
        </TechBox>

        <TechBox
          onClick={() => handleTechClick("React")}
          as={motion.div}
          initial={TechVariants.hidden}
          animate={TechVariants.visible}
          transition={{ duration: 1.3 }}
          whileHover={{ rotate: 360, scale: 1.5 }}
        >
          <FaReact size={50} />
        </TechBox>

        <TechBox
          onClick={() => handleTechClick("C#")}
          as={motion.div}
          initial={TechVariants.hidden}
          animate={TechVariants.visible}
          transition={{ duration: 1.6 }}
          whileHover={{ rotate: 360, scale: 1.5 }}
        >
          <TbBrandCSharp size={50} />
        </TechBox>
      </TechContainer>
    </>
  );
};

export default Tech;
