import { Component } from "react";
// import CardCompCrudDesign from "./CardCompCrudDesign";
import { Card, ListGroup } from "react-bootstrap";

class CardCompCrud extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      obj: {},
      count: 0,
      blankobj: {},
      height: ""
    };

    this.deleteData = this.deleteData.bind(this)
    this.editData = this.editData.bind(this)
  }

  async getValue(e) {
    if (e.target.type === "checkbox") {
      this.state.obj[e.target.name] = this.state.obj[e.target.name] || [];
      // this.state.obj[e.target.name] = [];
      if (e.target.checked) {
        this.state.obj[e.target.name] = [
          ...this.state.obj[e.target.name],
          e.target.value,
        ];
        // this.state.obj[e.target.name].push(e.target.value);
      } else {
        this.state.obj[e.target.name] = this.state.obj[e.target.name].filter(
          (x) => x !== e.target.value
        );
      }
    } else if (e.target.type === "file") {
        let x = await this.toBase64(e.target.files[0]);
        this.state.height = "50px";
        this.state.obj[e.target.name] = x;
    } else {
      this.state.obj[e.target.name] = e.target.value;
      this.state.blankobj[e.target.name] = "";
    }
    this.setState({ ...this.state });
  }

  toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  saveData() {
    if(this.state.obj.id === undefined){
        this.state.count++;
        this.state.obj.id = this.state.count;
        this.state.data.push({ ...this.state.obj });
    }
    else{
        let editObj = this.state.data.find((x) => x.id === this.state.obj.id);
        this.state.data.splice(editObj,1,this.state.obj);
    }

    this.state.obj = { ...this.state.blankobj };
    this.state.height = "";
    this.setState({ ...this.state });
  }
  
  deleteData(deleteId){
    let deleteIndex = this.state.data.findIndex((x) => x === deleteId);
    this.state.data.splice(deleteIndex,1);
    this.setState({...this.state})
  }
  
  editData(editObj){
    this.state.obj = {...editObj}
    this.state.height = "50px"
    this.setState({...editObj})
  }

  render() {
    return (
      <>
        <form action="" className="w-25 m-auto mt-5 shadow p-3 rounded-3">
          <div className="pb-3">
            <label htmlFor="" className="w-100">
              Title
            </label>
            <input
              value={this.state.obj.title ?? ""}
              type="text"
              className="w-100"
              name="title"
              onChange={(e) => this.getValue(e)}
            />
          </div>
          <div className="pb-3">
            <label htmlFor="" className="w-100">
              Email
            </label>
            <input
              value={this.state.obj.email ?? ""}
              type="email"
              className="w-100"
              name="email"
              onChange={(e) => this.getValue(e)}
            />
          </div>
          <div className="pb-3">
            <label htmlFor="" className="w-100">
              Gender
            </label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.obj.gender === "male"}
              onChange={(e) => this.getValue(e)}
            />
            Male
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.obj.gender === "female"}
              onChange={(e) => this.getValue(e)}
            />
            Female
          </div>
          <div className="pb-3">
            <label htmlFor="" className="w-100">
              Date
            </label>
            <input
              value={this.state.obj.date ?? ""}
              type="date"
              className="w-100"
              name="date"
              onChange={(e) => this.getValue(e)}
            />
          </div>
          <div className="pb-3">
            <label htmlFor="" className="w-100">
              Hobby
            </label>
            <input
              type="checkbox"
              name="hobby"
              value="cricket"
              checked={this.state.obj.hobby?.includes("cricket") === true}
              onChange={(e) => this.getValue(e)}
            />
            Cricket
            <input
              type="checkbox"
              name="hobby"
              value="football"
              checked={this.state.obj.hobby?.includes("football") === true}
              onChange={(e) => this.getValue(e)}
            />
            Football
            <input
              type="checkbox"
              name="hobby"
              value="volleyball"
              checked={this.state.obj.hobby?.includes("volleyball") === true}
              onChange={(e) => this.getValue(e)}
            />
            Volleyball
          </div>
          <div className="pb-3 d-flex">
            <label htmlFor="">Profile</label>
            <input type="file" name="profile" onChange={(e) => this.getValue(e)} />
            <img src={this.state.obj.profile} alt="" height={this.state.height} width={this.state.height}/>
          </div>
          <div>
            <button type="button" className="btn btn-success" onClick={() => this.saveData()}>
              Save
            </button>
          </div>
        </form>

        <div className="allCard m-auto mt-5">
        {this.state.data.map((x) => {
          return (
              <>
                <Card style={{ width: "23%" ,backgroundColor: "brown"}} className="p-0" key={x.id}>
                <p style={{backgroundColor: "coral",color: "white",fontWeight: "bolder"}} className="rounded p-2 text-center w-75 m-auto my-2">ID = {x.id}</p>
              <Card.Img variant="top" src={x.profile} width={"100%"} height={"200px"}/>
              <Card.Body>
                <Card.Title style={{color: "burlywood"}}>Title:- {x.title}</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item style={{backgroundColor: "burlywood" , color: "black"}} className="mb-2">Email:- {x.email}</ListGroup.Item>
                  <ListGroup.Item style={{backgroundColor: "burlywood" , color: "black"}} className="mb-2">Gender:- {x.gender}</ListGroup.Item>
                  <ListGroup.Item style={{backgroundColor: "burlywood" , color: "black"}} className="mb-2">Date:- {x.date}</ListGroup.Item>
                  <ListGroup.Item style={{backgroundColor: "burlywood" , color: "black"}} className="mb-2">Hobby:- {x.hobby?.join(",")}</ListGroup.Item>
                </ListGroup>
             
                <button className="btn btn-outline-warning me-2 mt-2 text-white" onClick={() => this.editData(x)}>Edit</button>
                <button className="btn btn-outline-danger mt-2 text-white" onClick={() => this.deleteData(x.id)}>Delete</button>
              </Card.Body>
            </Card>

            {console.log(x.id)}
            {/* <CardCompCrudDesign data1={x} key={x.id} delete={this.deleteData} edit={this.editData}/> */}
    
            {/* {console.log(this.state.data)} */}
            </>
            );
        })}
        </div>
      </>
    );
  }
}

export default CardCompCrud;