import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Display from './components/display'


class App extends React.Component{
    render(){
        return (
            <Display />
        )
    }
}

ReactDOM.render( 
    <App />, 
    document.getElementById('app')
)