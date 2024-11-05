import React, { useReducer } from 'react'

export const Counter2 = () => {
    const reducer =(state, action)=>{
        switch(action.type){
            case 'DESC':
                return { count: state.count-1}
            case 'ASC':
                return { count: state.count+1}
            case 'RESET':
                return { count: 0}
            default:
                return state;
        }

    }
    const [state, dispatch] = useReducer(reducer, {count: 0});
  return (
    <>
        <h1 className="font-bold">Task: Create a Counter application using useReducer.</h1>
        <div>
            Counter: {state.count}
            <button 
                className='ml-3 px-3 py-1 bg-green-500 text-white rounded'
                onClick={()=> dispatch({type: 'DESC'})}>
                    minus
            </button>
            <button 
                className='ml-3 px-3 py-1 bg-green-500 text-white rounded'
                onClick={()=> dispatch({type: 'ASC'})}>
                    plus
            </button>
            <button 
                className='ml-3 px-3 py-1 bg-red-500 text-white rounded'
                onClick={()=> dispatch({type: 'RESET'})}>
                    reset
            </button>
        </div> <br />
    </>
  )
}
