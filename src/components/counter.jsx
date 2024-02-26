import React from 'react'
import { useSelector } from 'react-redux';

function Counter() {
   const counter = useSelector(state => state.counter);

   return  (
    <>
       <div>{counter}</div>
   
    </>

   )
}


export default Counter