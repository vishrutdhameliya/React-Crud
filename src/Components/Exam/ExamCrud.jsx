import React, { useState } from 'react'

const ExamCrud = () => {
    let [obj, setObj] = useState({})
    let [blankobj, setblankobj] = useState({})
    let [arr, setArr] = useState([])
    let [count, setCount] = useState(0)


    function getData(e) {
        if (e.target.type === "checkbox") {
            obj[e.target.name] = obj[e.target.name] ?? []
            blankobj[e.target.name] = []
            if (e.target.checked) {
                obj[e.target.name] = [...obj[e.target.name], e.target.value]
            }
            else {
                obj[e.target.name] = obj[e.target.name].filter((x) => x !== e.target.value)
            }
        }
        else {
            obj[e.target.name] = e.target.value
            blankobj[e.target.name] = ""
        }
        setObj({ ...obj })
        setblankobj({ ...blankobj })
    }

    function submit(e) {
        if (obj.id === undefined) {
            count++;
            setCount(count);
            obj.id = count
            arr?.push(obj)
        }
        else {
            let index = arr.findIndex((x) => x.id === obj.id)
            arr.splice(index, 1, obj)
        }
        setArr({...arr})
        setObj({...blankobj})
    }
    return (
        <>
        {console.log(arr)}
            <div className='container w-50 p-3 shadow-sm'>
                <div>
                    <p className='fs-2 text-center'>Form</p>
                </div>
                <div>
                    <label htmlFor="" className='w-100'>First Name : </label>
                    <input type="text" className='w-100' name='fname' onChange={getData}  />
                    {/* <p className='text-danger'>{isError.fname}</p> */}

                    <label htmlFor="" className='w-100 mt-3'>Last Name : </label>
                    <input type="text" className='w-100' name='lname' onChange={getData}  />
                    {/* <p className='text-danger'>{isError.lname}</p> */}

                    <label htmlFor="" className='w-100 mt-3'>Email : </label>
                    <input type="email" className='w-100' name='email' onChange={getData}  />
                    {/* <p className='text-danger'>{isError.email}</p> */}


                    <label htmlFor="" className='w-100 mt-3'>Gender : </label>
                    <input type="radio" className='' name='gender' value='male' onChange={getData}  /> Male
                    <input type="radio" className='ms-3' name='gender' value='female' onChange={getData}  /> Female
                    {/* <p className='text-danger'>{isError.gender}</p> */}


                    <label htmlFor="" className='w-100 mt-3'>Hobby : </label>
                    <input type="checkbox" className='' name='hobby' value='dancing' onChange={getData}  /> Dancing
                    <input type="checkbox" className='ms-3' name='hobby' value='reading' onChange={getData}  /> Reading
                    <input type="checkbox" className='ms-3' name='hobby' value='gameing' onChange={getData} /> Gameing

                    <div className='mt-3'>
                        <button className='btn btn-success' onClick={submit}>Submit</button>
                    </div>
                </div>
            </div>

            <div className='mt-3'>
                <p className='fs-2 text-center'>Table</p>
                <table className='table table-success table-striped-dark'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Hobby</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default ExamCrud