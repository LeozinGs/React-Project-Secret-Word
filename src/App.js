// CSS
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react'

// Data
import { wordsList } from './data/words'

// Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import EndGame from './components/EndGame';

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' }
]

const guessesQty = 5

function replaceSpecialChars(str) {
  str = str.replace(/[ÀÁÂÃÄÅ]/, "A");
  str = str.replace(/[àáâãäå]/, "a");
  str = str.replace(/[ÈÉÊË]/, "E");
  str = str.replace(/[Ç]/, "C");
  str = str.replace(/[ç]/, "c");
  str = str.replace(/[èéê]/, "e");
  str = str.replace(/[ÌÍÎ]/, "I");
  str = str.replace(/[ìíî]/, "i");
  str = str.replace(/[ÒÓÔÕ]/, "O");
  str = str.replace(/[òóôõ]/, "o");
  str = str.replace(/[ÙÚÛ]/, "U");
  str = str.replace(/[ùúû]/, "u");

  // o resto

  return str.replace(/[^a-z0-9]/gi, '');
}

function App() {

  const [gameStage, setGameStage] = useState(
    stages[0].name
  )
  const [words] = useState(wordsList)

  //Escolher palavra e categoria
  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [worngLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesQty)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = useCallback(() => {
    // Escolhendo uma categoria aleatoria
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    console.log(category)

    // Escolhendo uma palavra aleatoria
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    console.log(word)

    return { word, category }
  }, [words])



  // Começa o jogo Secret Word
  const startGame = useCallback(() => {

    // Limpando todas as letras
    clearLetterStates()

    //Escolhendo palavra e categoria
    const { word, category } = pickWordAndCategory()

    //Criando array de letras
    let wordLetters = word.split("")
    wordLetters = wordLetters.map((l) => l.toLowerCase())
    wordLetters = wordLetters.map((l) => replaceSpecialChars(l))

    console.log(wordLetters)
    console.log(word, category)

    //Preenchendo states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)


    //Setando estágio do jogo
    setGameStage(stages[1].name)
  }, [pickWordAndCategory])

  // Processa a letra no input
  const verifyLetter = (letter) => {
    const normalizeLetter = letter.toLowerCase()

    //Checando se as letras ja foram utilizadas
    if (guessedLetters.includes(normalizeLetter) || worngLetters.includes(normalizeLetter)) {
      return
    }

    //Pegando a letra da tentativa ou removendo uma chance
    if (letters.includes(normalizeLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizeLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizeLetter
      ])

      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }

  //Função para resetar states
  const clearLetterStates = () => {

    setGuessedLetters([])
    setWrongLetters([])

  }

  useEffect(() => {

    //Checando se as tentativas acabaram
    if (guesses <= 0) {

      //Resetando todos os states
      clearLetterStates()
      setGameStage(stages[2].name)

    }

  }, [guesses])

  // Checando condição de vitória
  useEffect(() => {

    const uniqueLetters = [...new Set(letters)]

    // Condição de vitória
    if (guessedLetters.length === uniqueLetters.length && gameStage !== stages[0].name) {

      // Adcionando score
      setScore((actualScore) => actualScore += 100)

      // Resetando o jogo com uma palavra nova
      startGame()

    }


  }, [guessedLetters, letters, startGame, gameStage])

  // Recomeça o jogo
  const retry = () => {
    setScore(0)
    setGuesses(guessesQty)

    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          worngLetters={worngLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === 'end' && <EndGame retry={retry} score={score} />}

      {/* Zuluzes */}
      <div className='light x1'></div>
      <div className='light x2'></div>
      <div className='light x3'></div>
      <div className='light x4'></div>
      <div className='light x5'></div>
      <div className='light x6'></div>
      <div className='light x7'></div>
      <div className='light x8'></div>
      <div className='light x9'></div>

    </div>
  );
}

export default App;
