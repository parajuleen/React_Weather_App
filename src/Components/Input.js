import React, { useContext } from 'react'
import { CiSearch } from "react-icons/ci";
import { Apicontext } from '../App';


const Input = () => {

const{setInput,fetchApi, inputRef}=useContext(Apicontext)

const handleInputChange=(e)=>{
setInput(e.target.value)
}

  return (
    <>
    <div className="inputfield d-flex align-items-center justify-content-center p-2">
        <input type='text' placeholder='Enter the city name..' className='userinput' onChange={handleInputChange} ref={inputRef}/>
            <CiSearch className='fs-3 search-icon' onClick={fetchApi} />
    </div>
    </>
  )
}

export default Input
