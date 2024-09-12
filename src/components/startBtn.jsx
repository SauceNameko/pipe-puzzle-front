import "./startBtn.css";

export const StartBtn = ({ onStart, isStart }) => {
    return (
        <>
            {!isStart ? <button onClick={() => { onStart(true) }}  className="start">Start</button>
                : <button onClick={() => { onStart(false) }} className="stop" >Stop</button>
            }
        </>
    )
}