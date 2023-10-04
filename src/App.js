//Import React Hooks
import { useState }  from 'react';
//Import all Components
import MoleContainer from './Components/MoleContainer';


function App() {
  //Purpose: Keeps track of the user score
  let [score,setScore] = useState(0);
  //Purpose: Generates n mole containers
  const createMoleHill = (n) =>
  {
    let hills = [];
    for (let i=0; i<n; i++)
    {
      hills.push(<MoleContainer key={i} setScore={setScore} score={score}/>);
    }
    return(
      hills
    )
  };

  return (
    <div className="App">
      <h1>React a Mole</h1>
      <h2> Current Score: {score} </h2>
      <div className='MolesGameBoard'  style={{'width' : '30vw','display': 'grid', 'grid-template-columns': 'repeat(3, 1fr)'}}>
        {createMoleHill(9)}
      </div>
    </div>
  )
}

export default App;
