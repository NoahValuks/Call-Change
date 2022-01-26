import BellList from "../components/BellList";
import ChangeItem from "../components/ChangeItem";

import './CCContainer.css'

const CCContainer = ({changes}) => {

    const listOfChanges = changes.map((change, index) => {
        return <ChangeItem name={change.name} />
      });

    return( 
        <>
        <div class="dropdown">
        <button class="dropbtn">Changes</button>
        <div class="dropdown-content">
            {listOfChanges}
        </div>
        </div>
        <h1>Learn to Call Changes!</h1>
        <BellList />
        </>
    )
};

export default CCContainer;