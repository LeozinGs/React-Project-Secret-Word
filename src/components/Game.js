// Importando SASS para o componente.
import './Game.sass';

// Importando useState..
import { useState, useRef } from 'react'

const Game = ({
    verifyLetter,
    pickedWord,
    pickedCategory,
    letters,
    guessedLetters,
    worngLetters,
    guesses,
    score,
}) => {

    const [letter, setLetter] = useState("")
    const letterInputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        verifyLetter(letter)

        setLetter("")

        letterInputRef.current.focus()
    }

    return (
        <div className='screen'>
            <p className='points'>
                <span>Score: {score}</span>
            </p>
            {/* <h1>Guess the word: </h1> */}
            <div className="title">
                <span>G</span>
                <span>U</span>
                <span>E</span>
                <span>S</span>
                <span>S</span>
                <span></span>
                <span>T</span>
                <span>H</span>
                <span>E</span>
                <span></span>
                <span>W</span>
                <span>O</span>
                <span>R</span>
                <span>D</span>
            </div>
            <h3 className="tip">
                Tip: <span>{pickedCategory}</span>
            </h3>
            <p>You have {guesses} guess(es) remain</p>
            <div className="wordContainer">
                {letters.map((letter, i) => (
                    guessedLetters.includes(letter) ? (
                        <span key={i} className="letter">{letter}</span>
                    ) : (
                        <span key={i} className="blankSquare"></span>
                    )
                ))}
            </div>
            <div className="letterContainer">
                <p>Type a letter:</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="letter"
                        maxLength={1}
                        required
                        onChange={(e) => setLetter(e.target.value)}
                        value={letter.toUpperCase()}
                        ref={letterInputRef}
                    />
                    <button className='send'>&gt;</button>
                </form>
            </div>
            <div className="wrongLettersContainer">
                <p>Letters already used:</p>
                {worngLetters.map((letter, i) => (
                    <span key={i}> {letter.toUpperCase()},</span>
                ))}
            </div>
        </div >
    )
}

export default Game