import { useState, useEffect } from "react";
import BellList from "./BellList";
import BellItem from "./BellItem";

const TryToChange = ({changes}) => {
    
    const [bellOrder, setBellOrder] = useState([])
    const [number, setNumber] = useState(0)
    const [bells, setBells] = useState([])
    const [change, setChange] = useState([])

    useEffect(() => {
        addBells(number)
    }, [number])

    useEffect(() => {
        setNumber()
    },[])

    useEffect(() => {
        order()
    }, [bells])

    useEffect(() => {
        setChange()
    },[])

    // const listOfChanges = changes.map((change, index) => {
    //     const name = change.name
    //     const changeOn6 = change.on_six
    //     const changeOn8 = change.on_eight
    //     return {name: {name}, changeOn6: {changeOn6}, changeon8: {changeOn8}}
    //   });

    const handleOnClick6 = (event) => {
        event.preventDefault()
        setNumber(6)
    };

    const handleOnClick8 = (event) => {
        event.preventDefault()
        setNumber(8)
    };

    
    const addBells = (number) => {
        let num = 0
        let newBells = []
        while(num < number){
            const newNum = num+1
            num = newNum
            const newBell = BellItem(newNum)
            newBells = [...newBells, newBell]
        }
        setBells(newBells)
    };

    const order = () => {
        let newOrder = []
        let temp = bells
        temp.forEach(bell => newOrder = [...newOrder, bell.number.number])
        setBellOrder(newOrder)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let temp = bellOrder
        const bell1 = event.target.first.value
        const bell2 = event.target.second.value
        const index1 = temp.indexOf(bell1)
        const index2 = temp.indexOf(bell2)
        console.log(index1)
        console.log(bell1);
        console.log(index2 + 2);
        console.log(index2);
        console.log(bell2);
        if(index1 === (index2 + 2)){
            const index3 = temp.indexOf(index2 +1)
            const bell3 = temp[index3]
            const tempIndex = bell3
            temp.splice(index3, bell1)
            temp.splice(index1, tempIndex)
            setBellOrder(temp)
            console.log(temp)
        }

    }



    return(
        <>
            <h1>TRY TO CHANGE</h1>
            <button onClick={handleOnClick6}>Try on 6</button>
            <button onClick={handleOnClick8}>Try on 8</button>
            <form onSubmit={handleSubmit} >
                    <input type="text" id="first" name="first" />
                <label>
                    to:
                    <input type="text" id="second" name="second" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
};

export default TryToChange;