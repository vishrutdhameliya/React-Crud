import React, { useState } from 'react'
import validationData from '../ValidationJson.json';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { AiOutlineArrowUp } from 'react-icons/ai';



function ValidationComponent() {
  const [blankObj, setblankObj] = useState({ hobby: [] })
  const [obj, setobj] = useState({ fname: "", lname: "", email: "", mobile: "", date: "", gender: "", password: "", confirmPassword: "", hobby: [], information: "" })
  let [count, setcount] = useState(0)
  const [errorMsg, seterrorMsg] = useState({})
  const [formHeight, setformHeight] = useState(true)
  const [filterObj, setfilterObj] = useState({ fname: "", lname: "", email: "", mobile: "" })
  let checkAlphabet = /^[A-Za-z\s]*$/;
  let checkOnlyNumber = /^\d+$/;

  const capitalize = (value) => {
    let strArr = value.split(' ')
    strArr.forEach((x, i) => {
      strArr[i] = x.charAt(0).toUpperCase() + x.substring(1);
    })
    return strArr.join(' ')
  }

  let [arr, setarr] = useState([])
  const getFormData = async (e) => {
    if (e.target.type == 'checkbox') {
      if (e.target.checked) {
        obj.hobby.push(e.target.value)
      } else {
        obj.hobby = obj.hobby.filter(x => x !== e.target.value)
      }
      blankObj[e.target.name] = [];
    }
    else if (e.target.name == 'information') {
      obj[e.target.name] = capitalize(e.target.value);
    }
    else {
      obj[e.target.name] = e.target.value;
      blankObj[e.target.name] = '';
    }
    setobj({ ...obj })
    setblankObj({ ...blankObj })
    validationFunction(e.target.name)
  }
  const validationFunction = (name) => {
    let validationObj = validationData.find(x => x.name == name)
    let isValid = validationObj.conditions.find((x) => eval(x.condition))


    if (isValid) {
      if (isValid.otherField) {
        if (isValid.error) {
          errorMsg[isValid.otherField] = isValid.error;
        } else {
          delete errorMsg[isValid.otherField]
        }

      } else {
        errorMsg[name] = isValid.error;
      }
    } else {
      delete errorMsg[name]
    }
    seterrorMsg({ ...errorMsg })

  }

  const Save = () => {
    Object.keys(obj).forEach((x) => {
      validationFunction(x)
    })
    if (Object.keys(errorMsg).length == 0) {
      arr.push(obj)
      setarr([...arr])
    }
  }

  const openForm = () => {
    setformHeight(false)
  }
  const closeForm = () => {
    setformHeight(true)
  }

  const checkdate = () => {
    const olddate = new Date()
    olddate.setFullYear(new Date().getFullYear() - 18)
    return olddate < new Date(obj.date)
  }

  return (
    <>
      <form className='w-50 mt-4 mx-auto border border-1 p-4 custom_form' style={{ height: formHeight ? '70px' : 'fit-content', overflow: 'hidden' }}>
        <div className='d-flex justify-content-between'>
          <h4>FORM</h4>
          <div>
            {
              formHeight ? <AiOutlineArrowDown size={30} onClick={openForm} />
                : <AiOutlineArrowUp size={30} onClick={closeForm} />
            }
          </div>
        </div>
        <label htmlFor="" className='d-block mt-2'>First Name :</label>
        <input type="text" name='fname' className='w-100 p-1' value={obj.fname} onChange={getFormData} />
        <span className='error_msg'>{errorMsg?.fname}</span>

        <label htmlFor="" className='d-block mt-2'>Last Name :</label>
        <input type="text" name='lname' className='w-100 p-1' value={obj.lname} onChange={getFormData} />
        <span className='error_msg'>{errorMsg?.lname}</span>


        <label htmlFor="" className='d-block mt-2'>Email :</label>
        <input type="email" name='email' className='w-100 p-1' value={obj.email} onChange={getFormData} />
        <span className='error_msg'>{errorMsg?.email}</span>

        <label htmlFor="" className='d-block mt-2'>Date :</label>
        <input type="date" name='date' className='w-100 p-1' value={obj.date} onChange={getFormData} />
        <span className='error_msg'>{errorMsg?.date}</span>

        <label htmlFor="" className='d-block mt-2'>Mobile :</label>
        <input type="tel" name='mobile' className='w-100 p-1' value={obj.mobile} onChange={getFormData} />
        <span className='error_msg'>{errorMsg?.mobile}</span>

        <label htmlFor="" className='d-block mt-2'>Password :</label>
        <input type="password" name='password' className='w-100 p-1' value={obj.password} onChange={getFormData} />
        <span className='error_msg'>{errorMsg?.password}</span>

        <label htmlFor="" className='d-block mt-2'>Confirm Password :</label>
        <input type="password" name='confirmPassword' className='w-100 p-1' value={obj.confirmPassword} onChange={getFormData} />
        <span className='error_msg'>{errorMsg?.confirmPassword}</span>


        <label htmlFor="" className='d-block mt-2'>Gender :</label> <br />
        <input type="radio" name='gender' value='Male' checked={obj.gender == 'Male'} onChange={getFormData} />Male
        <input type="radio" name='gender' value='Female' checked={obj.gender == 'Female'} onChange={getFormData} />Female
        <br /><span className='error_msg'>{errorMsg?.gender}</span>

        <label htmlFor="" className='d-block mt-2'>Hobbies :</label> <br />
        <input type="checkbox" name='hobby' value='Coding' checked={obj.hobby?.includes('Coding')} onChange={getFormData} />Coding
        <input type="checkbox" name='hobby' value='Gaming' checked={obj.hobby?.includes('Gaming')} onChange={getFormData} />Gaming
        <input type="checkbox" name='hobby' value='Eating' checked={obj.hobby?.includes('Eating')} onChange={getFormData} />Eating<br />
        <input type="checkbox" name='hobby' value='Sleeping' checked={obj.hobby?.includes('Sleeping')} onChange={getFormData} />Sleeping
        <input type="checkbox" name='hobby' value='Travelling' checked={obj.hobby?.includes('Travelling')} onChange={getFormData} />Travelling
        <input type="checkbox" name='hobby' value='Driving' checked={obj.hobby?.includes('Driving')} onChange={getFormData} />Driving<br />
        <span className='error_msg'>{errorMsg?.hobby}</span>

        <label htmlFor='' className='d-block mt-2'>Information :</label>
        <textarea name='information' cols='30' rows='2' className='w-100 p-1' value={obj.information} onChange={getFormData}></textarea>
        <span className='error_msg'>{errorMsg?.information}</span><br />

        <button type='button' className='btn btn-warning mt-3 ' onClick={Save}>Submit</button>


        {/* <Link to='/FormTable'><button type='button' onClick={saveData} className='btn btn-outline-success'>Save</button></Link> */}

      </form>
      <table className='table mt-4'>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile No.</th>
            <th>Date</th>
            <th>Gender</th>
            <th>Hobby</th>
          </tr>
        </thead>
        <tbody>
          {
            arr.map((x, i) => {
              return <tr key={i}>
                <td>{x.id}</td>
                <td>{x.fname}</td>
                <td>{x.lname}</td>
                <td>{x.email}</td>
                <td>{x.mobile}</td>
                <td>{x.date}</td>
                <td>{x.gender}</td>
                <td>{x.hobby?.join(',')}</td>
                <td>
                  {/* <button onClick={() => editData(x)} className='btn btn-warning'>Edit</button> */}
                  {/* <button className='btn btn-danger' onClick={() => deleteData(x.id)}>Delete</button> */}
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default ValidationComponent
