import React, { Component } from 'react'
//xử lí sự kiện với props, state

export default class TVM_Eventfrom3 extends Component {
    constructor(props){
        super(props);
        //tạo đối tượng dữ liệu thông qua state
        this.state ={
            name:"Trần Văn Minh",
            job:"Dev soft"
        }
    }
    //Hàm xử lí sự kiện
    handleChangeName =()=>{
        this.setState({
            name:"K22CNTT2-ReactJs"
        })
    }
    handleChangeJob =()=>{
        this.setState({
            job:"K22CNTT2-ReactJs"
        })
    }
  render() {
    return (
      <div className='alert alert-primary'>
        <h2>Thay đổi dữ liệu trong state</h2>
        <p>Dữ liệu:{this.state.name} - {this.state.job}</p>
        <button onClick={this.handleChangeName}>Thay đổi name</button>
        <button onClick={this.handleChangeJob}>Thay đổi name</button>
      </div>
    );
  }
}
