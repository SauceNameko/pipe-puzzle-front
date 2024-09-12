import { useEffect, useState } from "react";

export const useClear = (field, clearField,) => {
    const [isClear, setIsClear] = useState(false);
    const [intervalFlag, setIntervalFlag] = useState(false);
    const [clearText, setClearText] = useState("");
    //ゲームクリア判定
    const checkClear = () => {
        return field.every((y, yIndex) => {
            return y.every((x, xIndex) => {
                return field[yIndex][xIndex] == clearField[yIndex][xIndex];
            })
        })
    }
    useEffect(() => {
        //フィールド読み込みまで待つ(everyは[]だとtrueが返ってしまうため)
        const clear = checkClear();
        if (field[0] && clear) {
            setIntervalFlag(true);
            if (intervalFlag) {
                setClearText("ゲームクリア");
            }
            if (clear) {

                setTimeout(() => {
                    setIsClear(true);
                }, 2000);
            }
        }
    }, [field]);

    useEffect(() => {
        if (!intervalFlag) {
            setClearText("");
        }
    }, [intervalFlag]);

    const resetClear = () => {
        setIsClear(false);
        setIntervalFlag(false);
    }

    return { isClear, clearText, intervalFlag, resetClear }
}