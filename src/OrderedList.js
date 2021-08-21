import React, { useState } from 'react'
import { FaUndo, FaAngleUp, FaAngleDown } from 'react-icons/fa'

function OrderedList() {
  const [item, setItem] = useState("")
  const [list, setList] = useState([])
  const [order, setOrder] = useState(1)

  const onSubmit = e => {
    e.preventDefault()
    if (e.charCode === 13) {
      const updatedArray = [...list, e.target.value]
      setList(updatedArray)
      setItem("")
    }
  }
  
  const handleInputChange = e => {
    setItem(e.target.value)
  }

  const handleKeyPress = e => {
    if (e.charCode === 13) {
      const updatedArray = [...list, e.target.value]
      setList(updatedArray)
      setItem("")
    }
  }

  const sort = () => {
    list.sort()
    if (order === -1) {
      list.reverse()
    }
    setOrder(-order)
    setList(list)
  }

  const reset = () => {
    setItem("")
    setList([])
  }

  return (
    <div>
      <form onSubmit={onSubmit} >
        <label>
          Item:
          <input 
            type="text"
            name="item"
            value={item}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </label>
        <button onClick={sort} type="button" >{order === 1 ? <FaAngleDown /> : <FaAngleUp />}</button>
        <button onClick={reset} type="button" ><FaUndo /></button>
      </form>
      <ul>
        {list.map((item) => <li>{item}</li>)}
      </ul>
    </div>
  ) 
}

export default OrderedList
