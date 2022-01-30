import './BellItem.css';

const BellItem = (number) => {
    
    const Bell = {
        image: <img src={require("../../images/Bell.png")} className="bell-image" alt="bell" />,
        number: {number}
    }
    
    return Bell
};

export default BellItem;