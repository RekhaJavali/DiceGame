import "../App.css";

export function TotalScore({score}){
    return(
        <div className="totalscore">
                        <h1>{score}</h1>
                        <p>Total Score</p>
        </div>
    )
}