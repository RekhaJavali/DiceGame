import "../App.css";

export function StartGame( {toggle}) {
    return (
        <div className='container'>
      
          {/* <img src = "../src/assets/images/dices_main.png" alt="main_dice" ></img> */}
          <img src = "./../public/images/dices_main.png" alt="main_dice" ></img>
          <div className='content'>
            <h1>Dice Game</h1>
            <button className="button" onClick={toggle}>Play Now</button>
          </div>
      </div>
    )
}