import React, { Component } from 'react'

export default class TVM_Eventfrom4 extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Trần Minh"
        }
    }
    handlegetName = ()=>{
        alert(this.props.name);
        this.setState({
            name:this.props.name
        })
    }
  render() {
    return (
      <div className='alert alert-info'>
        <h2>Lấy dữ liệu từ props</h2>
        <button onClick={this.handlegetName}>Lấy tên </button>
        <h2>welcome to, {this.state.name}</h2>
      </div>
    )
  }
}
