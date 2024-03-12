import { useState } from "react";
import { Rules } from "./Rules";

export function GamePlay(){
    const [ score, setScore ] = useState(0);
    const [ error, setError ] = useState("");
    const [showRules, setShowRules] = useState(false);
    const [currentDice, setCurrentDice] = useState(1)
    const [selectNumber, setSelectNumber] = useState(null);



    const resetScore = ()=> {
        setScore(0);
    }

    const handleshowRules = () => {
        setShowRules((prev) => !prev);
    }

    const generateRandomNumber =(min, max) =>{
        const randnum = Math.floor(Math.random()*(max-min)+min);
        console.log(randnum);
        return randnum;
    }
    // generateRandomNumber(1,7);

    const handleroleDice = () => {
        if(!selectNumber){
            setError(" You have not selected the number");
            return;
        }

        const randomNumber = generateRandomNumber(1,7);

        setCurrentDice((prev)=>randomNumber);

        if(selectNumber === randomNumber) {
            setScore((prev)=> prev + randomNumber);
        }else{
            setScore((prev)=>prev-2);
        }

        setSelectNumber(null);
    }

    const diceNum = [1,2,3,4,5,6];

    const handleSelectNum = (num)=>{
        setSelectNumber(num);
        setError("");
    }

    return(
        <>
            <div className="maincontainer">
                <div className="top_section">
                    <div className="totalscore">
                        <h1>{score}</h1>
                        <p>Total Score</p>
                    </div>
                    <div className="NumberSection">
                        <p className="error">
                            {error}
                        </p>
                        <div className="numbers">
                            {/* <p className="scorenumber">1</p>
                            <p className="scorenumber">2</p>
                            <p className="scorenumber">3</p>
                            <p className="scorenumber">4</p>
                            <p className="scorenumber">5</p>
                            <p className="scorenumber">6</p> */}
                            {diceNum.map((numVal, index)=>{
                                return (<p key={index} className={numVal === selectNumber ? "scorenumber selected" : "scorenumber" }  onClick={()=>handleSelectNum(numVal)}>{numVal}</p>)
                            })}

                        </div>
                        <p className="selectNum">Select Number</p>
                    </div>                       
                </div>

                <div className="roleDice">
                    <div className="dice" onClick = {handleroleDice}>
                        <img src = {`../src/assets/images/dice/dice_${currentDice}.png`} alt ="rolediceimage"></img>
                    </div>
                    <p>Clcik on Dice to roll</p>
                </div>
                <div className="btns">
                    <button className="resetbtn" onClick = {resetScore}>Reset Score</button>
                    <button className="button" onClick = {handleshowRules}>{showRules ? "Hide": "Show"} Rules</button>
                </div>
                {showRules && <Rules /> }
            </div>
            
        </>
    )
}