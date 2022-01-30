import { useState } from "react";
import BellList from "./BellList";
import BellItem from "./BellItem";

const TryToChange = () => {
    
    const [bellOrder, setBellOrder] = useState([])
    const [number, setNumber] = useState(0)
    const [bells, setBells] = useState([])


    const handleOnClick6 = () => {
        setNumber(6)
        addBells(number)
    };

    const handleOnClick8 = () => {
        setNumber(8)
        addBells(number)
    };
    
    
    const addBells = (number) => {
        let num = 0
        let newBells = []
        while(num !== number){
            const newNum = num+1
            const newBell = BellItem(newNum)
            newBells = [...newBells, newBell]
        }
        setBells(newBells)
    };
    


    return(
        <>
            <h1>TRY TO CHANGE</h1>
            <button onClick={handleOnClick6}>Try on 6</button>
            <button onClick={handleOnClick8}>Try on 8</button>
        </>
    )
};

export default TryToChange;