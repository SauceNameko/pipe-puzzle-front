import { useEffect, useRef, useState } from "react"

export const useField = (isStart) => {
    const [field, setField] = useState([]);
    const [clearField, setClearField] = useState([]);
    const data = [
        [1, 1, 5, 2],
        [8, 9, 10, 8],
        [4, 12, 13, 5],
        [4, 17, 6, 3]
    ];
    const clearData = [
        [1, 4, 5, 1],
        [7, 10, 12, 6],
        [4, 12, 14, 5],
        [4, 17, 6, 3]
    ];
    //フィールド取得
    useEffect(() => {
        setField(data);
        setClearField(clearData);
    }, []);

    const handleClick = (yIndex, xIndex) => {
        if (isStart) {
            const newField = [...field];
            //circle
            if (newField[yIndex][xIndex] != 4 && newField[yIndex][xIndex] >= 0 && newField[yIndex][xIndex] < 5) {
                newField[yIndex][xIndex] = newField[yIndex][xIndex] + 1;
            } else if (newField[yIndex][xIndex] == 4) {
                newField[yIndex][xIndex] = 1;
            }
            //L
            if (newField[yIndex][xIndex] != 8 && newField[yIndex][xIndex] >= 5 && newField[yIndex][xIndex] < 9) {
                newField[yIndex][xIndex] = newField[yIndex][xIndex] + 1;
            } else if (newField[yIndex][xIndex] == 8) {
                newField[yIndex][xIndex] = 5;
            }
            //T
            if (newField[yIndex][xIndex] != 12 && newField[yIndex][xIndex] >= 9 && newField[yIndex][xIndex] < 13) {
                newField[yIndex][xIndex] = newField[yIndex][xIndex] + 1;
            } else if (newField[yIndex][xIndex] == 12) {
                newField[yIndex][xIndex] = 9;
            }
            //water
            if (newField[yIndex][xIndex] != 16 && newField[yIndex][xIndex] >= 13 && newField[yIndex][xIndex] < 17) {
                newField[yIndex][xIndex] = newField[yIndex][xIndex] + 1;
            } else if (newField[yIndex][xIndex] == 16) {
                newField[yIndex][xIndex] = 13;
            }
            //border
            if (newField[yIndex][xIndex] != 18 && newField[yIndex][xIndex] >= 17 && newField[yIndex][xIndex] < 19) {
                newField[yIndex][xIndex] = newField[yIndex][xIndex] + 1;
            } else if (newField[yIndex][xIndex] == 18) {
                newField[yIndex][xIndex] = 17;
            }
            setField(newField);
        }
    }

    const resetField = () => {
        setField(JSON.parse(JSON.stringify(data)));
    }

    return { field, clearField, handleClick, resetField }
}