import BellList from "../components/BellList";
import ChangeItem from "../components/ChangeItem";
import { useState } from "react";

import './CCContainer.css'

const CCContainer = ({changes}) => {

    const listOfChanges = changes.map((change, index) => {
        return <ChangeItem name={change.name} />
      });

      const [bellOrder, setBellOrder] = useState([])

    

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
        <h3>How calls are made</h3>
        <p>There are slightly different ways of making the changes, 
            but one of the most common ways is to call the bells down. 
            A bell can only move one place at a time so it isn't possible 
            to get to one of these well known changes in one call.
            Instead a series of calls will be needed to get the bells where you want them.
            e.g starting from rounds, which is 1 2 3 4 5 6 7 8, You would call Three to One to get to 1 3 2 4 5 6 7 8
            This would tell the third bell to follow the treble instead of number 2.
            This change would have affected 3 bells. The third bell is obviously now following the treble, 
            the second is following the 3rd and even though the 4th bell doesn't change in position, 
            it is now follwing the second.</p>
        <BellList />
        </>
    )
};

export default CCContainer;