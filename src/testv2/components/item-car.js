import React from 'react';

const ItemCar  = (props) => {
  return (
    <>
      <tr key={props.id}>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.price}</td>
        <td align="center">
          <button onClick={props.incrementPrice}>+</button>
        </td>
        <td align="center">
          <button onClick={props.decrementPrice}>-</button>
        </td>
      </tr>
    </>
  )
}
export default React.memo(ItemCar);