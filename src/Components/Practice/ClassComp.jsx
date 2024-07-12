import React, { Component } from 'react'

export default class ClassComp extends Component {
    constructor(){
        super()
        this.state = {
            obj : {},
            blankobj : {},
            arr : [],
            count : 0
        }
    }
    getData(e){
        console.log(e.target.value);
        
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
                            onChange={(e) => this.getData(e)}
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
                            onChange={(e) => this.getData(e)}

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
                            onChange={(e) => this.getData(e)}

                        />
                        Male
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.obj.gender === "female"}
                            onChange={(e) => this.getData(e)}

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
                            onChange={(e) => this.getData(e)}

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
                            onChange={(e) => this.getData(e)}
                        />
                        Cricket
                        <input
                            type="checkbox"
                            name="hobby"
                            value="football"
                            checked={this.state.obj.hobby?.includes("football") === true}
                            onChange={(e) => this.getData(e)}
                            
                        />
                        Football
                        <input
                            type="checkbox"
                            name="hobby"
                            value="volleyball"
                            checked={this.state.obj.hobby?.includes("volleyball") === true}
                            onChange={(e) => this.getData(e)}
                        />
                        Volleyball
                    </div>
                    <div className="pb-3 d-flex">
                        <label htmlFor="">Profile</label>
                        <input type="file" name="profile" onChange={(e) => this.getData(e)}/>
                        <img src={this.state.obj.profile} alt="" height={this.state.height} width={this.state.height} />
                    </div>
                    <div>
                        <button type="button" className="btn btn-success" onClick={this.saveData}>
                            Save
                        </button>
                    </div>
                </form>
            </>
        )
    }
}
