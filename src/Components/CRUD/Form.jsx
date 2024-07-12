import React, { useState } from 'react'
import { Button, Col, Form, FormCheck, FormLabel } from 'react-bootstrap'
import Table from './Table'

const Formation = () => {

    let [blankobj, setblankobj] = useState({})
    let [obj, setObj] = useState({})
    let [arr, setArr] = useState(JSON.parse(localStorage.getItem('array')) || [])
    let [count, setCount] = useState(JSON.parse(localStorage.getItem('id')) || 0)

    function getValue(e) {
        if (e.target.type === "checkbox") {
            obj[e.target.name] = obj[e.target.name] ?? [];
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
    function saveData(e) {
        if (obj.id === undefined) {
            count++;
            obj.id = count;
            setCount(count);
            arr?.push(obj)
            localStorage.setItem("id",count)
        }
        else {
            let index = arr.findIndex((x) => x.id === obj.id)
            arr.splice(index, 1, obj)
            localStorage.setItem("array" , JSON.stringify(arr))
        }
        setArr([...arr])
        setObj({ ...blankobj })
    }

    const editData = (edit) => {
        setObj({ ...edit })
    }

    const deleteData =(delet) => {
        let index = arr.findIndex((x) => x.id === delet)
        arr.splice(index , 1)
        
        setArr([...arr])
        localStorage.setItem("id",count)

        localStorage.setItem("array" , JSON.stringify(arr))

    }

    return (
        <div>
            <h2 className='text-center bg-success p-2 text-white'>Application Form</h2>
            <div className='container w-50'>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control onChange={getValue} type="text" name="fname" value={obj?.fname ?? ""} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control onChange={getValue} type="text" name="lname" value={obj?.lname ?? ""} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={getValue} name="email" type="email" value={obj?.email ?? ""} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control onChange={getValue} name="address" value={obj?.address ?? ""} />
                    </Form.Group>
                    <div>
                        <p>Gender : </p>
                        <FormCheck type="radio" name="gender" value="male" className="d-inline-block mx-1" checked={obj?.gender === "male"}></FormCheck>Male
                        <FormCheck type="radio" name="gender" value="female" onChange={getValue} className="d-inline-block mx-2" checked={obj?.gender === "female"}></FormCheck>Female
                        <FormCheck type="radio" name="gender" value="other" onChange={getValue} className="d-inline-block mx-1" checked={obj?.gender === "other"}></FormCheck>Other
                    </div>
                    <div>
                        <FormLabel className="w-100 mt-1">Hobby :</FormLabel>
                        <FormCheck type="checkbox" name="hobby" value="cricket" onChange={getValue} checked={obj?.hobby?.includes("cricket")===true} className="d-inline-block  mx-2" ></FormCheck>Cricket
                        <FormCheck type="checkbox" name="hobby" value="football" onChange={getValue} checked={obj?.hobby?.includes("football")=== true} className="d-inline-block mx-2" ></FormCheck>Football
                        <FormCheck type="checkbox" name="hobby" value="volleyball" onChange={getValue} checked={obj?.hobby?.includes("volleyball")=== true} className="d-inline-block mx-2" ></FormCheck>Volleyball
                    </div>
                    <div>
                        <Button variant="success" className='mt-2' type="button" onClick={saveData}>Submit  </Button>
                    </div>
                </Form>
            </div>
            <h2 className='text-center mt-2'> Table</h2>
            <div className='mt-3'>

                <table className="table table-success text-center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Adress</th>
                            <th>Gender</th>
                            <th>Hobby</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr?.map((x) => {
                                return (
                                    <Table array={x} key={x.id} edit={editData} del={deleteData}  />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Formation