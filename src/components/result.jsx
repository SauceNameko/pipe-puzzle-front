import { useEffect, useState } from "react";
import "./result.css";
import { getRanks, postTime } from "../api";

export const Result = ({ time, reset }) => {
    const [ranks, setRanks] = useState([]);
    //ランキング取得

    useEffect(() => {
        const getData = async () => {
            const data = await getRanks();
            const sortData = data.sort((a, b) => a.time.localeCompare(b.time));
            const sliceData = sortData.slice(0, 4);
            setRanks(sliceData);
        }
        getData();
    }, []);

    return (
        <div className="result">
            <div className="result-text">ゲームクリア！！！</div>
            <div className="clear-time-text">あなたのクリアタイム</div>
            <div className="time">{time}</div>
            <button className="post-btn" onClick={() => { postTime(time) }} >投稿</button>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>プレイヤー名</th>
                        <th>クリアタイム</th>
                    </tr>
                </thead>
                <tbody>
                    {ranks.map((rank, rankIndex) => {
                        return <tr key={`rank-${rankIndex}`}>
                            <td>{rankIndex + 1}</td>
                            <td>{rank.name}</td>
                            <td>{rank.time}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            <button className="back-btn" onClick={() => { reset() }} >リプレイ</button>

        </div>
    )
}