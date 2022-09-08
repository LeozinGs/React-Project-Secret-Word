import './StartScreen.sass'

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">

      {/* <h1>Secret Word</h1> */}

      {/* Texto Principal */}
      <div className="text">
        <span>S</span>
        <span>E</span>
        <span>C</span>
        <span>R</span>
        <span>E</span>
        <span>T</span>
        <span></span>
        <span>W</span>
        <span>O</span>
        <span>R</span>
        <span>D</span>
      </div>

      {/* Instrução */}
      <p>Clique no Botão para começar a jogar!</p>

      {/* Button */}
      <button onClick={startGame}>Start Game</button>

    </div>
  )
}

export default StartScreen