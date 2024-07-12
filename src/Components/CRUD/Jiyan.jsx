// import { getValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { Button, Form, FormCheck, FormLabel } from "react-bootstrap";
import React from "react";

function FuncCompCrud() {
    let [blankobj,setblankonj] = useState({})
    let [obj,setobj] = useState({})
    let [data,setData] = useState( JSON.parse(localStorage.getItem("array")) || [])
    let [count,setcount] = useState(JSON.parse(localStorage.getItem("count")) || 0)

    const getValue = (e) => {
      if(e.target.type === "checkbox"){
        obj[e.target.name] = obj[e.target.name] ?? [];
        blankobj[e.target.name] = [];
        if(e.target.checked){
            obj[e.target.name] = [...obj[e.target.name],e.target.value];
          // obj[e.target.name].push(e.target.value);
        }
        else{
          obj[e.target.name] = obj[e.target.name].filter((x) => x !== e.target.value)
        }
      }
      else{
        obj[e.target.name] = e.target.value;
        blankobj[e.target.name] = "";
      }
        setobj({...obj})
        setblankonj({...blankobj})
      }
      
      const saveData = (e) => {
        if(obj.id === undefined){
          count++;
          obj.id = count;
          setcount(count);
          data?.push(obj);
          localStorage.setItem("count",count);
        }
        else{
          let saveIndex = data.findIndex((x) => x.id === obj.id);
          data.splice(saveIndex,1,obj); 
        }
        setData([...data]);
        setobj({...blankobj});
        localStorage.setItem('array',JSON.stringify(data));
      }
      
      const editData = (editObj) => {
        setobj({...editObj})
      }

      const deleteData = (deleteId) => {
        let deleteIndex = data.findIndex((x) => x.id === deleteId);
        data.splice(deleteIndex,1); 
        setData([...data]);
        localStorage.setItem('array',JSON.stringify(data));
      }
      
      return (
        <>
      <Form className="w-25 m-auto my-5">
      <div>
        <FormLabel htmlFor="" className="w-100">
          First Name
        </FormLabel>
        <Form.Control type="text" name="fname" onChange={getValue} value={obj.fname ?? ""}></Form.Control>
      </div>
      <div>
        <FormLabel htmlFor="" className="w-100">
          Email
        </FormLabel>
        <Form.Control type="text" name="email" onChange={getValue} value={obj.email ?? ""}></Form.Control>
      </div>
      <div className="mt-2">
        <FormLabel htmlFor="" className="w-100">
          Gender
        </FormLabel>
        <div>
        <FormCheck type="radio" name="gender" value="male" onChange={getValue} className="d-inline-block" checked={obj.gender === "male"}></FormCheck>Male
        <FormCheck type="radio" name="gender" value="female" onChange={getValue} className="d-inline-block" checked={obj.gender === "female"}></FormCheck>Female
        <FormCheck type="radio" name="gender" value="other" onChange={getValue} className="d-inline-block" checked={obj.gender === "other"}></FormCheck>Other
        </div>
      </div>
      <div className="mt-2">
        <FormLabel htmlFor="" className="w-100">
          Batch
        </FormLabel>
        <FormCheck type="radio" name="batch" value="morning" onChange={getValue} className="d-inline-block" checked={obj.batch === "morning"}></FormCheck>Morning
        <FormCheck type="radio" name="batch" value="evening" onChange={getValue} className="d-inline-block" checked={obj.batch === "evening"}></FormCheck>Evening
      </div>
      <div>
        <FormLabel className="w-100">Hobby</FormLabel>
        <FormCheck type="checkbox" name="hobby" value="cricket" onChange={getValue} className="d-inline-block" checked={obj.hobby?.includes("cricket") === true}></FormCheck>Cricket
        <FormCheck type="checkbox" name="hobby" value="football" onChange={getValue} className="d-inline-block" checked={obj.hobby?.includes("football") === true}></FormCheck>Football
        <FormCheck type="checkbox" name="hobby" value="volleyball" onChange={getValue} className="d-inline-block" checked={obj.hobby?.includes("volleyball") === true}></FormCheck>Volleyball
      </div>
      <div>
        <FormLabel className="w-100">Course</FormLabel>
        <FormCheck type="checkbox" name="course" value="React" onChange={getValue} className="d-inline-block" checked={obj.course?.includes("React")  === true}></FormCheck>React
        <FormCheck type="checkbox" name="course" value="Node" onChange={getValue} className="d-inline-block" checked={obj.course?.includes("Node")  === true}></FormCheck>Node
        <FormCheck type="checkbox" name="course" value=".net" onChange={getValue} className="d-inline-block" checked={obj.course?.includes(".net")  === true}></FormCheck>.net
      </div> <br />
      <div>
        <Button variant="success" type="button" onClick={saveData}>Save</Button>
      </div>
    </Form>


        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Batch</th>
              <th>Hobby</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.map((x) => {
                return(
                  <tr key={x.id}>
                  <td>{x.id}</td>
                  <td>{x.fname}</td>
                  <td>{x.email}</td>
                  <td>{x.gender}</td>
                  <td>{x.batch}</td>
                  <td>{x.hobby?.join(",")}</td>
                  <td>{x.course?.join(",")}</td>
                  <td>
                    <button className="btn btn-warning me-2" onClick={() => editData(x)}>Edit</button>
                    <button className="btn btn-danger" onClick={() => deleteData(x.id)}>Delete</button>
                  </td>
                </tr>
                )
              })
            }
          </tbody>
        </table>
    </>
  );
}

export default FuncCompCrud;