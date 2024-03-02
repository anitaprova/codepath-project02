import "./App.css";
import { useState } from "react";

const App = () => {
  const info = {
    0: { Question: "Conjugation of Ser (Yo)", Answer: "Soy" },
    1: { Question: "Conjugation of Ser (Tu)", Answer: "Eres" },
    2: { Question: "Conjugation of Ser (El/Ella/Ustedes)", Answer: "Es" },
    3: { Question: "Conjugation of Ser (Nosotros/Nosotras)", Answer: "Somos" },
    4: { Question: "Conjugation of Ser (Vosotros/Vosotras)", Answer: "Sois" },
    5: { Question: "Conjugation of Ser (Ellos/Ellas)", Answer: "Son" },

    6: { Question: "Conjugation of Estar (Yo)", Answer: "Estoy" },
    7: { Question: "Conjugation of Estar (Tu)", Answer: "Estás" },
    8: { Question: "Conjugation of Estar (El/Ella/Ustedes)", Answer: "Está" },
    9: {
      Question: "Conjugation of Estar (Nosotros/Nosotras)",
      Answer: "Estamos",
    },
    10: {
      Question: "Conjugation of Estar (Vosotros/Vosotras)",
      Answer: "Estáis",
    },
    11: { Question: "Conjugation of Estar (Ellos/Ellas)", Answer: "Estan" },
  };

  const [count, setCount] = useState(0);
  const [text, setText] = useState(info[count].Question);
  const [question, setQuestion] = useState(true);

  const incrementCount = () => {
    const random = Math.floor(Math.random() * Object.keys(info).length);
    setCount(random);
    setText(info[random].Question);
  };

  const decrementCount = () => {
    // if (count - 1 >= 0) {
    //   setCount(count - 1);
    //   setText(info[count - 1].Question);
    // }

    const random = Math.floor(Math.random() * Object.keys(info).length);
    setCount(random);
    setText(info[random].Question);
  };

  const updateInfo = () => {
    if (question === true) {
      setText(info[count].Answer);
      setQuestion(false);
    } else {
      setText(info[count].Question);
      setQuestion(true);
    }
  };

  return (
    <div className="App">
      <h1>Spanish Flashcards</h1>
      <p>
        I have a Spanish quiz on Tueday! So I will be listing the material here
        for it like the conjugation of ser and estar verbs. 
      </p>
      <p>Total Number of Cards: {Object.keys(info).length}</p>
      <div className="card" onClick={updateInfo}>
        <p>{text}</p>
      </div>
      <div className="buttons">
        <button onClick={decrementCount}>←</button>
        <button onClick={incrementCount}>→</button>
      </div>
    </div>
  );
};

export default App;
