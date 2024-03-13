import { useState } from "react";
import { Rules } from "./Rules";
import { RollDice } from "./RollDice";
import { TotalScore } from "./TotalScore";
import { NumberSelector } from "./NumberSelector";

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
//moving to NumberSelector comp.
    // const diceNum = [1,2,3,4,5,6];

    // const handleSelectNum = (num)=>{
    //     setSelectNumber(num);
    //     setError("");
    // }

    return(
        <>
            <div className="maincontainer">
                <div className="top_section">
                    <TotalScore score = {score} />
                    <NumberSelector error ={error} setError={setError} selectNumber={selectNumber} setSelectNumber={setSelectNumber} />                      
                </div>

                <RollDice doroledice = {handleroleDice} 
                        currentDicenum = {currentDice}
                        selectNumber ={selectNumber} 
                        setSelectNumber = {setSelectNumber}/>
                
                <div className="btns">
                    <button className="resetbtn" onClick = {resetScore}>Reset Score</button>
                    <button className="button" onClick = {handleshowRules}>{showRules ? "Hide": "Show"} Rules</button>
                </div>
                {showRules && <Rules /> }
            </div>
            
        </>
    )
}