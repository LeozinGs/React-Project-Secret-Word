import './StartScreen.css'

const StartScreen = () => {
  return (
    <div className="start">
        <h1>Secret Word</h1>
        <p>Clique no Botão para começar a jogar!</p>
        <button>Start Game</button>

        {/* Circulos animados */}
        <div className="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >

    </div>
  )
}

export default StartScreen