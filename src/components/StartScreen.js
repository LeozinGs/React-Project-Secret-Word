import './StartScreen.sass'

const StartScreen = () => {
  return (
    <div className="start">
      {/* <h1>Secret Word</h1> */}
      <div class="text">
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
      <p>Clique no Botão para começar a jogar!</p>
      <button>Start Game</button>
    </div>
  )
}

export default StartScreen