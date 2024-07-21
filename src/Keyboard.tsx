
import styles from './Keyboard.module.css'


const keys = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

type KeyboardProps = {
    activeLetters: string[],
    inactiveLetters: string[],
    disabled?:boolean
    addGuessedLetter: (letter: string) => void
}

export const Keyboard = ({ activeLetters, inactiveLetters, addGuessedLetter , disabled=false}: KeyboardProps) => {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(50px, 1fr))",
            gap: '.5rem',
            width: '100%',
            maxWidth: '620px',
            margin: '0 auto'
        }}>
            {keys.map((key) => {
                const isActive=activeLetters.includes(key)
                const isInactive=inactiveLetters.includes(key)
                return (
                    <button
                        onClick={() => addGuessedLetter(key)}
                        key={key}
                        disabled={isInactive||isActive||disabled}
                        className={`${styles.btn} ${isActive?styles.active:""}  ${isActive?styles.active:""}`}>
                        {key}
                       
                    </button>)
            })}
        </div>
    )
}
