import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Parents = () => {


    let [arr , setArr] = useState([])
    let [obj , setObj] = useState({})
    let [blankobj , setblankobj] = useState({})

    useEffect(() => {   
        apiData()
    }, [])

    const getData = (e) => {
        if(e.target.type === "checkbox"){
            obj[e.target.name] = obj[e.target.name] ?? []       
            blankobj[e.target.name] = []
            if(e.target.checked){
                obj[e.target.name] = [...obj[e.target.name] , e.target.value]
            }
            else{
                obj[e.target.name] = obj[e.target.name].filter((x) => x !== e.target.value)
            }
        }
        else{
            obj[e.target.name] = e.target.value
            blankobj[e.target.name]= ""
        }

        setObj({ ...obj })
        setblankobj({ ...blankobj })
    } 
    const apiData=()=>{
        axios.get('https://student-api.mycodelibraries.com/api/student/get').then((res)=>{
            setArr([...res.data.data])
        }).catch((err)=> {
            console.log(err);
        })  
    }
    const saveData = () => {
        if(obj._id === undefined){
            axios.post('https://student-api.mycodelibraries.com/api/student/add', obj).then((res)=>{
                apiData();
            }).catch((err)=>{
                console.log(err);
            })
        }
        else{
            obj.id = obj._id
            axios.post('https://student-api.mycodelibraries.com/api/student/update',obj).then((res)=>{
                apiData()
            })
        }
        setObj({...blankobj})
    } 

    const editData = (id) => {
        axios.get('https://student-api.mycodelibraries.com/api/student/get-student-by-id?id='+id).then((res)=>{
            res.data.data.hobbies = res.data.data.hobbies.split(',')
            setObj({...res.data.data})
        }).catch((err)=>{
            console.log(err);
        })
    } 

    const deleteData = (id) => {
        
        axios.delete('https://student-api.mycodelibraries.com/api/student/delete?id='+id).then((res)=>{
            apiData()
        }).catch((err)=>{
            console.log(err);
        })

    }   

    return (
        <>
            <div>
                <form action="" className='w-50 mx-auto p-4 border border-1 mt-5 form_custom'>
                    <div className='d-flex justify-content-between' >
                        <h3>FORM</h3>
                    </div>
                    <label htmlFor="" className='d-block mt-3'>First Name :</label>
                    <input type="text" name="firstName" className='w-100' onChange={getData} value={obj?.firstName ?? ""} />

                    <label htmlFor="" className='d-block mt-2'>Last Name :</label>
                    <input type="text" name="lastName" className=' w-100' onChange={getData} value={obj?.lastName ?? ""} />

                    <label htmlFor="" className='d-block mt-2'>Age :</label>
                    <input type="number" name="age" className='w-100' onChange={getData} value={obj?.age ?? ""} />

                    <label htmlFor="" className='d-block mt-2'>City :</label>
                    <select name="city" className='w-100' id="" onChange={getData}>
                        <option value="Surat">Surat</option>
                        <option value="Bhavnagar">Bhavnagar</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                    </select>

                    <label htmlFor="" className='d-block mt-2'>Gender :</label>
                    <input type="radio" name="gender" value='male' className='' onChange={getData} checked={obj?.gender === "male"} />Male
                    <input type="radio" name="gender" value='female' className='ms-2' onChange={getData} checked={obj?.gender === "female"} />Female

                    <label htmlFor="" className='d-block mt-2'>Hobby :</label>
                    <input type="checkbox" name="hobbies" value='Reading' className='' onChange={getData} checked={obj?.hobbies?.includes('Reading') === true} />Reading
                    <input type="checkbox" name="hobbies" value='Dancing' className='ms-2' onChange={getData} checked={obj?.hobbies?.includes('Dancing') === true} />Dancing
                    <input type="checkbox" name="hobbies" value='Gameing' className='ms-2' onChange={getData} checked={obj?.hobbies?.includes('Gameing') === true} />Gameing

                    <div className='mt-3'>
                        <button type='button' onClick={saveData} className='btn btn-success '>Submit</button>
                    </div>

                </form>


                {/* <button className='btn btn-dark m-4' onClick={getData}>Click Me</button> */}
                <table className='table table-dark table-striped-columns mt-4 text-center' >
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>City</th>
                            <th>Age</th>
                            <th>Hobbies</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((x) => {
                                return (
                                    <tr>
                                        <td >{x.firstName}</td>
                                        <td >{x.lastName}</td>
                                        <td >{x.gender}</td>
                                        <td >{x.city}</td>
                                        <td >{x.age}</td>
                                        <td >{x.hobbies}</td>
                                        <td>
                                            <button className='btn btn-primary' onClick={() => editData(x._id)}>Edit</button>
                                            <button className='btn btn-danger ms-2' onClick={() => deleteData(x._id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
