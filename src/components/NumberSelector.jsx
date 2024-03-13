

export function NumberSelector({error, setError, selectNumber, setSelectNumber }){

    const diceNum = [1,2,3,4,5,6];

    const handleSelectNum = (num)=>{
            setSelectNumber(num);
            setError("");
        }

    return(
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
                                return (<p key={index} className={numVal === selectNumber ? "scorenumber selected" : "scorenumber" }  
                                onClick={()=>handleSelectNum(numVal)}>{numVal}</p>)
                            })}

                        </div>
                        <p className="selectNum">Select Number</p>
                    </div> 
    )
}