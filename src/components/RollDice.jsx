import "../App.css"


export function RollDice({doroledice, currentDicenum}) {
    return(
        <div className="roleDice">
            <div className="dice" onClick = {doroledice}>
                <img src = {`../src/assets/images/dice/dice_${currentDicenum}.png`} alt ="rolediceimage"></img>
            </div>
            <p>Clcik on Dice to roll</p>
        </div>
    )
}