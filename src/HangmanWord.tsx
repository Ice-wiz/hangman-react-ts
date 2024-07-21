
type HangmanWordProps = {
    guessedLetters: string[],
    wordToGuess: string
}

export const HangmanWord = ({ guessedLetters, wordToGuess }: HangmanWordProps) => {

    return <div style={{ display: "flex", gap: ".25em", fontSize: "6rem", fontWeight: 'bold', textTransform: "uppercase", fontFamily: "monoSpace" }}>

        {wordToGuess.split("").map((letter, index) => (
            <span key={index} style={{ borderBottom: ".4rem solid black" }}>
                <span style={{
                    visibility: guessedLetters.includes(letter) ? "visible" : "hidden"
                }}>
                    {letter}
                </span>
            </span>
        ))}
    </div>
}