import './EndGame.sass'

const EndGame = ({ retry, score }) => {
    return (
        <div>
            {/* <h1>Game Over</h1> */}

            <div className="endTitle">
                <span>G</span>
                <span>A</span>
                <span>M</span>
                <span>E</span>
                <span></span>
                <span>O</span>
                <span>V</span>
                <span>E</span>
                <span>R</span>
                <span></span>
                <span>;-;</span>
            </div>

            <h2>
                Your final score is: <span>{score}</span>
            </h2>
            <button onClick={retry}>Recomeçar</button>
        </div>
    )
}

export default EndGame