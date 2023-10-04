import { useEffect }   from "react";
import  emptyMoleImage from "../assets/molehill.png" 



function EmptySlot(properties){
    //Purpose: Set a Timeout for changing displayMole back to true upon empty slot rendering
    useEffect(() =>{
        let randomMoleTimer = Math.ceil(Math.random() * 5000);
        //when the timer is up the mole will display
        let timer = setTimeout(() => {
            properties.setDisplayMole(true)
        }, randomMoleTimer);
        //Cleanup
        return () => clearTimeout(timer)
    },[])

    return(
     <div>
        <img style={{'width': '200px'}} alt='moleHill' src={emptyMoleImage} onClick={properties.handleHillClick} />
     </div>   
    )
};

export default EmptySlot;