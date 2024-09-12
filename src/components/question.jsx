import "./question.css";
export const Question = ({ }) => {
    return (
        <div className='question-field'>
            <div className="question-texts">
                <div>基本ルール:</div>
                <p>パイプの配置: ゲーム画面には、ランダムに配置されたパイプがあり、それぞれが異なる形（直線、曲線、十字など）をしています。最初はパイプが接続されておらず、バラバラに配置されています。</p>
                <p>パイプの操作: プレイヤーは、パイプをクリックまたはタップして回転させることができます。</p>
                <p>スタートとゴール: パズルには、液体が流れ出す「スタート」と、目指す「ゴール」があります。スタートからゴールまで、すべてのパイプを繋げることが成功の条件です。</p>
                <p>液体の流れ: スタートからパイプを通して液体が流れます。プレイヤーが正しいパイプの配置を完成させると、液体が途切れることなくゴールまで到達します。</p>
                <div>クリア条件:</div>
                <p>正しい接続: すべてのパイプが適切に接続され、液体がスタートからゴールまで漏れずに流れた場合、プレイヤーの勝利です。</p>
                <p>失敗条件: パイプが正しく繋がっていない場合、液体は途中で漏れてしまい、パズルは失敗となります。</p>
                <div>ヒント:</div>
                <p>複雑なパズルの場合、ゴールから逆算してパイプを繋げることが効果的です。</p>
                <p>各パイプの形状に注目し、どの方向に液体が流れるかを確認して回転させてください。</p>
            </div>
        </div>
    )
}