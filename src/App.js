import React, { Component } from 'react'
import TVM_Eventfrom1 from './components/TVM_Eventfrom1'
import TVM_Eventfrom2 from './components/TVM_Eventfrom2'
import TVM_Eventfrom3 from './components/TVM_Eventfrom3'
import TVM_Eventfrom4 from './components/TVM_Eventfrom4'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Even From Demo</h1>
        <TVM_Eventfrom1/>
        <TVM_Eventfrom2/>
        <TVM_Eventfrom3/>
        <TVM_Eventfrom4 name="Trần Văn Minh"/>
      </div>
    )
  }
}
