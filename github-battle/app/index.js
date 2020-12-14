import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'
import Battle from './components/Battle'

// Component (3 Aspects of Component)
// State
// Lifecycle
// UI

class App extends React.Component{
    render(){
        return (
        <div className = 'container'>
            <Battle/>
        </div>
        )
    }//what you return from render is the description of what the UI is going to look like
}

ReactDOM.render( //allows us to render a react element on the react dom by taking 2 different arguments
    //React Element
    //Where to render the element to
    <App />, //creating a brand new react element under the hood
    document.getElementById('app')
)