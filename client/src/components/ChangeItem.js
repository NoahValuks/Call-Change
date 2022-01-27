import { Link, Redirect} from "react-router-dom";

const ChangeItem = ({name}) => {
    
    const url = `/${name}`

    console.log(url);
    
    // console.log(link());

    return(
        <>
            <Link to={url} >{name}</Link>
        </>
    )
};

export default ChangeItem;