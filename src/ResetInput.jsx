import React from 'react'


export default function ResetInput({inputValue,setInputValue}) {
  if (!input) {
    return null
  }
  return 
<button className="reset-input" onClick={() => setInputValue('')}>Reset Input</button>
  
}