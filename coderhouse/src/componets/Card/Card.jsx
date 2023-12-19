import React, { useState } from 'react'
import "./card.css"
import Button from '../Button/Button'

const Card = () => {

  const [count, setCount] = useState(1)

  const agregar = () => {
    setCount (count+1)
  }

  const eliminar = () => {
    setCount (count-1)
  }

  const resetear = () => {
    setCount (1)
  }

  return (
    <div className='card'>
        <h2>Zapatilla Nike</h2>
        <p>Cantidad:</p>
        <p>{count}</p>
        <Button label={"Agregar"} color={'red'} callback={()=>agregar()} />
        <Button label={"Eliminar"} color={'blue'} callback={()=>eliminar()} />
        <Button label={"Resetear"} color={'green'} callback={()=>resetear()} />
    </div>
  )
}

export default Card