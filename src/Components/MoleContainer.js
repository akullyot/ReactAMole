//Purpose of Component: Component that decides which child component is rendered 
import { useState } from 'react';
//Import Components
import Mole         from './Mole';
import EmptySlot    from './EmptySlot';


//Propertires : setScore={setScore} score={score}
function MoleContainer(properties){ 
    //Purpose: Determine the status of the mole in the container
    let [displayMole, setDisplayMole] = useState(false);
    //Purpose: Function to iterate score variable and set moleDisplay back to false
    const handleMoleBoppedClick = (event) => {
        properties.setScore(properties.score + 1);
        setDisplayMole(false);
    };
    //Purpose: handles when a empty slot is clicked
    const handleHillClick = (event) =>{
        properties.setScore(properties.score - 1);
    }
    //Purpose: If display Mole is true, display the mole component, if not, display the empty slot
    let modularMoleComponent = displayMole ? <Mole setScore={properties.setScore} setDisplayMole={setDisplayMole} handleMoleBoppedClick={handleMoleBoppedClick}/> : <EmptySlot setDisplayMole={setDisplayMole} handleHillClick = {handleHillClick}/>
    return(
        <div style={{'width': '400px'}}>
            {modularMoleComponent}
        </div>
    )
};

export default MoleContainer;