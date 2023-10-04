import { useEffect } from "react";
import  moleImage    from "../assets/mole.png" 

function Mole(properties){
    //Purpose: runs on Mole Component Rendering and sets a timer for the mole changing
    useEffect(() => {
        let randomMoleTimer = Math.ceil(Math.random() * 5000);
        //when the timer is up the mole will display
        let timer = setTimeout(() => {
            properties.setDisplayMole(false)
        }, randomMoleTimer);
        //Cleanup
        return () => clearTimeout(timer)
    }, []);
    return(
     <div>
        <img style ={{'width': '200px'}} src = {moleImage} alt='moleImage' onClick={properties.handleMoleBoppedClick}/>
    </div>   
    )
};

export default Mole;