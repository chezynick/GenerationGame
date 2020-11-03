import React  from 'react'
const Winner = ({winner,setWinner, count, setCount}) => {

   function playHandler() {
        setWinner('none')
        setCount(0)
    }
    return (
    <div className='winnerBox' style={{display:winner}}>
        <div>You have Picked that one already!</div>
        <div>You have scored {count} points!</div>
        <div>Well Done</div>
        <button onClick={playHandler}>Play Again?</button>
    </div>
    )
}

export default Winner