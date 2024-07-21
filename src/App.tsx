import { useEffect, useState, useCallback } from 'react'
import './App.css'
import words from "./wordList.json"
import { HangmanDrawing } from './HangmanDrawing'
import { HangmanWord } from './HangmanWord'
import { Keyboard } from './Keyboard'

function App() {

  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));

  const isLoser  = incorrectLetters.length>=6
  const isWinner = wordToGuess.split("").every(letter=>guessedLetters.includes(letter))


  // const addGuessedLetter = useCallback((letter: string) => {
  //   if (guessedLetters.includes(letter)) return;
  //   setGuessedLetters((letters: string[]) => [...letters, letter]);
  // }, [guessedLetters])

  // useEffect(() => {
  //   const handler = (e: KeyboardEvent) => {
  //     // sourcery skip: use-object-destructuring
  //     const key = e.key
  //     if (!key.match(/^[a-z]$/)) return
  //     e.preventDefault()
  //     addGuessedLetter(key)
  //   }
  //   console.log("hi")
  //   document.addEventListener("keypress", handler)
  //   return () => {
  //     document.removeEventListener("keypress", handler)
  //   }
  // }, [addGuessedLetter])

  const addGuessedLetter = (letter: string) => {
    if (guessedLetters.includes(letter)) return;
    setGuessedLetters((letters: string[]) => [...letters, letter]);
  };
  
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      // addGuessedLetter(key);
    if (guessedLetters.includes(key)) return;
    setGuessedLetters((letters: string[]) => [...letters, key]);
    };
  
    console.log("hi");
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);


  return (
    <div style={{
      maxWidth: '800px',
      display: 'flex',
      flexDirection: 'column',
      gap: "3rem",
      margin: "0 auto",
      alignItems: "center",
    }}>

      <div style={{
        fontSize: "2rem", textAlign: "center", paddingTop: '2rem',
        background: '',
        // width:'150px'
      }}>
        {isWinner&&"Winner! - Refresh to try again"}
        {isLoser&&"Looser! - Refresh to try again"}
      </div>

      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: 'strech' }}>
        <Keyboard activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
          disabled={isWinner||isLoser}
        />
      </div>
    </div>
  )
}

export default App
