import React from 'react'

const Tables = (props) => {
  return (
    <>
        <tr>
          <td>{props.array.id}</td>
          <td>{props.array.fname}</td>
          <td>{props.array.lname}</td>
          <td>{props.array.email}</td>
          <td>{props.array.address}</td>
          <td>{props.array.city}</td>
          <td>{props.array.zip}</td>
          <td>{props.array.gender}</td>
          <td>{props.array.hobby?.join(',')}</td>
          <td>
            <button className='btn btn-primary' onClick={()=> props.edit(props.array)}>Edit</button>
            <button className='btn btn-danger ms-2' onClick={()=> props.del(props.array.id)}>Delete</button>
          </td>
        </tr>  
    </>
  )
}

export default Tables