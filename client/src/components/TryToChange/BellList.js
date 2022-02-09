import BellItem from "./BellItem";


const BellList = ({bellOrder}) => {

    const createBells = () => {
        bellOrder.forEach(bell => {
            return(
            <>
                <img src={require("../../images/Bell.png")} className="bell-image" alt="bell" />
                {bell.number}
            </>
            )
        })    
    }


    return(
        <>
        {createBells()}
        </>
    )
};

export default BellList;