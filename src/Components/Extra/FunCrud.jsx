import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Tables from './Table';
import validationData from '../json/Data.json'
let letters = /^[A-Za-z\s]*$/

const FunCrud = () => {

    let [obj, setObj] = useState({})
    let [arr, setArr] = useState([])
    let [blankobj, setblankobj] = useState({})
    let [count, setCount] = useState(0)
    let [isError, setIsError] = useState({})

    const getData = (e) => {

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
        ValidationData(e.target.name)
    }

    function ValidationData(name) {
        let validobj = validationData.find((x) => x.name === name)
        if (validobj) {
            let errorobj = validobj.conditions.find((x)=> eval(x.condition))
            if(errorobj){
                isError[name] = errorobj.error;
            }
            else{
                delete isError[name]
            }


            //     validobj.conditions.forEach((x) => {
            //         if (eval(x.condition)) {
            //             // console.log(x.error);
            //             isError[name] = x.error
            //         }
            //         else {
            //             delete isError[name]
            //         }
            //     })
            // if(eval(validobj.conditions.condition)){
            //     isError[name] = validobj.conditions.error
            // }
            // else{
            //     delete isError[name]
            // }
        }
        setIsError({ ...isError })
    }

    const saveData = (e) => {
        if (obj.id === undefined) {
            count++;
            obj.id = count
            setCount(count)
            arr?.push(obj);
            // setArr[...arr]
        }
        else {
            let index = arr.findIndex((x) => x.id === obj.id)
            arr.splice(index, 1, obj)
        }
        setArr([...arr])
        setObj({ ...blankobj })
    }
    const editData = (edit) => {
        setObj({ ...edit })
    }
    const deleteData = (id) => {
        let idd = arr.findIndex((x) => x.id === id)
        arr.splice(idd, 1)
        setArr([...arr])
    }
    return (
        <>
            <div className='container  w-50 shadow-lg p-2 mt-2'>
                <p className='text-center fs-3 mb-4 bg-success-subtle p-2'>Form</p>
                <Form className='p-2'>
                    <Row className="mb-3">
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control onChange={getData} value={obj?.fname ?? ""} type="text" name='fname' />
                            <p className='text-danger'>{isError.fname}</p>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>last Name</Form.Label>
                            <Form.Control onChange={getData} value={obj?.lname ?? ""} type="text" name='lname' />
                            <p className='text-danger'>{isError.lname}</p>

                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={getData} value={obj?.email ?? ""} type="email" name='email' />
                        <p className='text-danger'>{isError.email}</p>

                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Address </Form.Label>
                        <Form.Control onChange={getData} value={obj?.address ?? ""} type='text' name='address' />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label >City</Form.Label>
                            <Form.Control type="text" value={obj?.city ?? ""} name='city' onChange={getData} />
                        </Form.Group>


                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label >Zip</Form.Label>
                            <Form.Control type='number' value={obj?.zip ?? ""} name="zip" onChange={getData} />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3 d-flex" >
                        Gender:
                        <Form.Check type="radio" name='gender' value='male' checked={obj?.gender === "male"} onChange={getData} className='ms-3' label="Male" />
                        <Form.Check type="radio" name='gender' value='female' checked={obj?.gender === "female"} onChange={getData} className='mx-2' label="Female" />
                        <Form.Check type="radio" name='gender' value='other' checked={obj?.gender === "other"} onChange={getData} className='mx-2' label="Other" />

                    </Form.Group>
                    <Form.Group className="mb-3 d-flex">
                        Hobby:
                        <Form.Check type="checkbox" name='hobby' value='Dancing' checked={obj?.hobby?.includes('Dancing') === true} onChange={getData} className='ms-3' />Dancing
                        <Form.Check type="checkbox" name='hobby' value='Reading' checked={obj?.hobby?.includes('Reading') === true} onChange={getData} className='mx-2' />Reading
                        <Form.Check type="checkbox" name='hobby' value='Gaming' checked={obj?.hobby?.includes('Gaming') === true} onChange={getData} className='mx-2' />Gaming
                        <Form.Check type="checkbox" name='hobby' value='Swimming' checked={obj?.hobby?.includes('Swimming') === true} onChange={getData} className='mx-2' />Swimming
                    </Form.Group>

                    <Button variant="success" type="button" onClick={saveData}>
                        Submit
                    </Button>
                </Form>
            </div>

            <div className='mt-5'>
                <p className='text-center fs-4 fw-bold'>Data Entry</p>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Zip</th>
                            <th>Gender</th>
                            <th>Hobbies</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((x) => {
                                return (
                                    <Tables array={x} key={x.id} edit={editData} del={deleteData} />
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default FunCrud