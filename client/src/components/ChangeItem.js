import { Link, Redirect} from "react-router-dom";

const ChangeItem = ({name}) => {
    
    const url = `/${name}`

    return(
        <>
            <Link to={url} >{name}</Link>
        </>
    )
};

export default ChangeItem;