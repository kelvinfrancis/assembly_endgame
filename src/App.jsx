import { useState } from "react";
import { languages } from "./languages";

function App() {
  const [currentWord, setCurrentWord] = useState("react");

  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const alphabetElements = alphabet.split("").map((letter, index) => {
    <button key={index}>{letter.toUpperCase()}</button>
  })
  console.log(alphabetElements)

  const letterElements = currentWord.split("").map((letter, index) => (
    <span key={index}>{letter.toUpperCase()}</span>
  ));

  const languageElements = languages.map((lang) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    return (
      <span className="chip" key={lang.name} style={styles}>
        {lang.name}
      </span>
    );
  });

  return (
    <>
      <header>
        <h1>Assembly: Endgame </h1>
        <p>
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>
      <section className="language-chips">{languageElements}</section>
      <section className="word">{letterElements}</section>
      <section className="keyboard">{alphabetElements}</section>
    </>
  );
}

export default App;