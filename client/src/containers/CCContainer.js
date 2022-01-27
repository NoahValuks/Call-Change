import BellList from "../components/BellList";
import ChangeItem from "../components/ChangeItem";

import './CCContainer.css'

const CCContainer = ({changes}) => {

    const listOfChanges = changes.map((change, index) => {
        return <ChangeItem name={change.name} />
      });

    return( 
        <>
        <div className="dropdown">
        <button className="dropbtn">Changes</button>
        <div className="dropdown-content">
            {listOfChanges}
        </div>
        </div>
        <h1>Learn to Call Changes!</h1>
        <p>
            Instead of following the same bell
            all the time, the conductor will change the
            order in which the bells ring. They will call a
            bell to follow a different one.
            The idea is to produce musical-sounding
            changes
        </p>
        <h3>Well-known Changes</h3>
        <ul>
            <li>Kings | 132546 | 13254768</li>
            <li>Queens | 135246 | 13572468</li>
            <li>Whittingtons | 531246 | 17532468</li>
            <li>Tittums | 142536 | 15263748</li>
            <li>Back rounds | 543216 | 76543218</li>
        </ul>
        <BellList />
        </>
    )
};

export default CCContainer;