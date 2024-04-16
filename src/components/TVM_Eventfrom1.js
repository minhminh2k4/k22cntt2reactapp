import React, { Component } from 'react'

export default class TVM_Eventfrom1 extends Component {
  // ham xu ly su kien
  eventHandleClick1 = () =>{
    alert("event handle 1");
}

  eventHandleClick2() {
    alert("event handle 2")
}
  render() {
    return (
        <div className='alert alert-danger'>
        <h2>Event handle</h2>
         {/* gọi hàm xử lý sự kiện khi render */}
         <button onclick={this.eventHandleClick1()}>Click 1</button>
         {/* gọi hàm xử lý sự kiện khi click  */}    
         <button onClick={this.eventHandleClick2}>Click 2</button>

   </div>
    )
  }
}
