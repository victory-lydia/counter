import  { useEffect, useState} from 'react'

import './App.css';
function App(){
  const [counter, setCounter] = useState(0);
  let[incremented, setIncremented] = useState(false);

  /*
  function incrementCounter() {
    setCounter(counter + 1)
    setIncremented(true)
    setCounter(counter => counter + 1)
*/

    const automatic = () => {
      let interval = setInterval(() => {
        setCounter(counter => {
          if(counter === 60) {
            clearInterval(interval)
            return counter
          }
         return counter + 1
        })
      }, 1000)
    }

    useEffect(() => {
      automatic()
    }, [])


  function decrementCounter() {
    if(counter<= 0){
      setCounter(65)
    } else if (incremented === true){
      setCounter(65)
    }
    setCounter(counter => counter-5)
    setIncremented(false);
  }
  return(
    <div className='counter'> 
      <h1>{counter}</h1>
      <button className='decrementBtn' onClick={decrementCounter}>DECREMENT</button>
    </div>
  )
}


export default App;