import './EndGame.sass'

const EndGame = ({ retry }) => {
    return (
        <div>
            <h1>Game Over</h1>
            <button onClick={retry}>Recomeçar</button>
        </div>
    )
}

export default EndGame