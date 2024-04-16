import React from 'react'

export default function TVM_Eventfrom2() {

    //Đĩnh nghĩa các hàm xử lí sự kiện
    const eventHandleClick1 = (content)=>{
        console.log('===============================');
        console.log(content);
        console.log('===============================');
    }
  return (
    <div className='alert alert-success'>
      <h2>Event Demo - function components</h2>
      <button onClick={eventHandleClick1("Trần Văn Minh")}>Gọi khi render</button>
      <button onClick={eventHandleClick1("K22CNTT2-ReactJs")}>Gọi khi click</button>
    </div>
  )
}
