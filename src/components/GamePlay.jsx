import { useState } from "react";

export function GamePlay(){
    const [ score, setScore ] = useState(0);


    return(
        <>
            <div className="maincontainer">
                <div className="top_section">
                    <div className="score">
                        <h1>{score}</h1>
                        <p>Total Score</p>
                    </div>
                    <div className="NumberSection">
                        <p className="error">
                            error
                        </p>
                    <div className="numbers">
                        <p className="scorenumber">1</p>
                            <p className="scorenumber">2</p>
                            <p className="scorenumber">3</p>
                            <p className="scorenumber">4</p>
                            <p className="scorenumber">5</p>
                            <p className="scorenumber">6</p>
                        </div>
                    </div>
                </div>

                <div className="roleDice">

                </div>
                <div className="btns">
                    <button>Reset Score</button>
                    <button>Show Rules</button>
                </div>
            </div>
            
        </>
    )
}