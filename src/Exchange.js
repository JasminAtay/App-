import React, { Component } from 'react'

export default class Exchange extends Component {
   constructor(props){
       super(props)
       this.state = {
           kur: "",
           miktar: "",
           sonuc: ""
       }
   }
   
   
    render() {
        return (
            <form>
                <label>Dolar :</label>
                <input type="number"/>
                <button>Exchange</button>
                <p>TYL:</p>
            </form>
        )
    }
}
