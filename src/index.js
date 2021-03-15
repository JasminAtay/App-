import React from 'react'
import ReactDOM from 'react-dom'
import Exchange from './Exchange'


const App = () => {
    return(
        <div>
            <Exchange/>
        </div>
    )
}
ReactDOM.render(<App/>, document.querySelector('#root'))