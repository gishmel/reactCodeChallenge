import React, { useState } from 'react'
import { FaUndo, FaAngleUp, FaAngleDown, FaAngleRight } from 'react-icons/fa'

function OrderedList() {
  const [item, setItem] = useState("")
  const [list, setList] = useState([])
  const [order, setOrder] = useState(0)

  const onSubmit = e => {
    e.preventDefault()
    if (e.charCode === 13) {
      let updatedArray = [...list, e.target.value]
      if (order) {
        updatedArray.sort()
      } 
      if (order === -1) {
        updatedArray = updatedArray.reverse()
      }
      setList(updatedArray)
      setItem("")
    }
  }
  
  const handleInputChange = e => {
    setItem(e.target.value)
  }

  const handleKeyPress = e => {
    if (e.charCode === 13) {
      let updatedArray = [...list, e.target.value]
      if (order) {
        updatedArray.sort()
      } 
      if (order === -1) {
        updatedArray = updatedArray.reverse()
      }
      setList(updatedArray)
      setItem("")
    }
  }

  const sort = () => {
    if (order === 0) {
      list.sort()
      setOrder(1)
      setList(list)
    } else if (order === 1) {
      list.sort().reverse()
      setOrder(-1)
      setList(list)
    } else if (order === -1) {
      list.sort()
      setOrder(1)
      setList(list)
    }
  }

  const reset = () => {
    setItem("")
    setList([])
    setOrder(0)
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
        <button onClick={sort} type="button" >{order === 0 
                                                ? <FaAngleRight /> 
                                                :  order === 1 
                                                  ? <FaAngleDown /> 
                                                  : <FaAngleUp />
        }</button>
        <button onClick={reset} type="button" ><FaUndo /></button>
      </form>
      <ul>
        {list.map((item) => <li>{item}</li>)}
      </ul>
    </div>
  ) 
}

export default OrderedList
