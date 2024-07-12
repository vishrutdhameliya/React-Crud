import React, { Component } from 'react'

export class LifeCycle extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
        this.state = {
            count : 0
        }
        console.log('Constructor');
    }

    componentDidMount(){
        console.log('componentDidMount');
    }
    componentDidUpdate(preprops , prestate, snapshot){
        console.log('componentDidUpdate' , preprops , prestate , snapshot);

    }

    render() {
        console.log('Render');
        return (
            <>
                <h1 className='text-center fw-bolder mt-4'>{this.state.count} DHAMELIYA</h1>
                <button className=' btn btn-dark m-5' onClick={()=> { this.setState({count : this.state.count+1})}}>Click</button>


            </>
        )
    }
}

export default LifeCycle