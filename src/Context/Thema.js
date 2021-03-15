import React, { Component, createContext } from 'react'

export const themaContext = createContext()

class ThemaContextProvider extends Component{
    state = {
        infoThema : true,
        light: {color: '#555', bg: '#eee'},
        dark: {color: '#ddd', bg: '#555'}
    }
    degistirTema = () =>{
        this.setState({infoThema:!this.state.infoThema})
    }
    render(){
        return(
            <themaContext.Provider value={{...this.state, degistirTema:this.degistirTema}}>
                {this.props.children}
            </themaContext.Provider>
        )
    }
}
export default ThemaContextProvider