import BellItem from "./BellItem";
import Draggable from 'react-draggable';


const BellList = () => {


    return(
        <>
        <div>
            <Draggable>
                <div className="drag-box">
                    <BellItem />
                </div>
            </Draggable>
        </div>
        <div>
            <Draggable>
                <div className="drag-box">
                    <BellItem />
                </div>
            </Draggable>
        </div>
        <div>
            <Draggable>
                <div className="drag-box">
                    <BellItem />
                </div>
            </Draggable>
        </div>
        <div>
            <Draggable>
                <div className="drag-box">
                    <BellItem />
                </div>
            </Draggable>
        </div>
        <div>
            <Draggable>
                <div className="drag-box">
                    <BellItem />
                </div>
            </Draggable>
        </div>
        <div>
            <Draggable>
                <div className="drag-box">
                    <BellItem />
                </div>
            </Draggable>
        </div>
        <div>
            <Draggable>
                <div className="drag-box">
                    <BellItem />
                </div>
            </Draggable>
        </div>
        <div>
            <Draggable>
                <div className="drag-box">
                    <BellItem />
                </div>
            </Draggable>
        </div>
        </>
    )
};

export default BellList;