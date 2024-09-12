import "./fieldSeen.css"
import { StartBtn } from "./startBtn"
import { Time } from "./time"
export const FieldSeen = ({ field, onPush, onStart, time, isStart, clearText }) => {
    return (
        <>
                <StartBtn onStart={onStart} isStart={isStart}></StartBtn>
            <div className="items">
                <Time time={time}></Time>
            </div>
            <div className="field">
                {field.map((y, yIndex) => {
                    return y.map((x, xIndex) => {
                        return <div className={`box 
                    ${x == 1 ? "circle bottom" : ""}
                    ${x == 2 ? "circle left" : ""}
                    ${x == 3 ? "circle top" : ""}
                    ${x == 4 ? "circle right" : ""}
                    ${x == 5 ? "L left" : ""}
                    ${x == 6 ? "L top" : ""}
                    ${x == 7 ? "L right" : ""}
                    ${x == 8 ? "L bottom" : ""}
                    ${x == 9 ? "T right" : ""}
                    ${x == 10 ? "T bottom" : ""}
                    ${x == 11 ? "T left" : ""}
                    ${x == 12 ? "T top" : ""}
                    ${x == 13 ? "water right" : ""}
                    ${x == 14 ? "water bottom" : ""}
                    ${x == 15 ? "water top" : ""}
                    ${x == 16 ? "water left" : ""}
                    ${x == 17 ? "border right" : ""}
                    ${x == 18 ? "border bottom" : ""}
                    `} key={`box-${xIndex}`}
                            onClick={() => { onPush(yIndex, xIndex) }}
                        ></div>
                    })
                })}
                {/* <div className="clearText">{clearText}</div> */}

            </div>
        </>
    )
}