import React, { Component } from 'react'
import axios from 'axios'

export default class Exchange extends Component {
   constructor(props){
       super(props)
       this.state = {
           kur: "",
           miktar: "",
           sonuc: "",
           base: "USD"
       }
   }


   componentDidMount(){
       axios.get(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
        .then(res=>{
            this.setState({kur: res.data.rates.TRY})
        })
    }
   
    miktarHandler = (event) =>{
        this.setState({miktar: event.target.value})
    }
    submitHandler = (event) => {
        this.setState({
            sonuc: this.state.kur*this.state.miktar
        })
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <select>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>CAD</option>
                </select>
                <input onChange={this.miktarHandler}
                value={this.state.miktar}
                type="number"/>
                <button type="submit">Exchange</button>
                <p>TYL: {this.state.sonuc} </p>
            </form>
        )
    }
}
