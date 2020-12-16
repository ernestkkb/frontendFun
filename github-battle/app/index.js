import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {ThemeProvider} from './contexts/theme'
import Nav from './components/nav'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Loading from './components/loading'
// Component (3 Aspects of Component)
// State
// Lifecycle
// UI

const Popular = React.lazy(()=> import('./components/popular'))
const Battle = React.lazy(()=> import('./components/battle'))
const Results = React.lazy(()=> import('./components/results'))

class App extends React.Component{

    state = {
        theme:'light',
        toggleTheme: () => {
            this.setState(({theme}) =>({
                theme: theme === 'light' ? 'dark': 'light'
            }))
        }
    }

    render(){
        return (
        <Router>
            <ThemeProvider value = {this.state}>
                <div className = {this.state.theme}>
                    <div className = 'container'>
                        <Nav/>
                        <React.Suspense fallback = {<Loading/>}>
                            <Switch>
                                <Route exact path = '/' component = {Popular} />
                                <Route exact path = '/battle' component = {Battle} />
                                <Route path = '/battle/results' component = {Results}/>
                                <Route render = {() => <h1>404 Page not Found!</h1>}/>
                            </Switch>
                        </React.Suspense>
                    </div>
                </div>
            </ThemeProvider>
        </Router>
        )
    }//what you return from render is the description of what the UI is going to look like
}

ReactDOM.render( //allows us to render a react element on the react dom by taking 2 different arguments
    //React Element
    //Where to render the element to
    <App />, //creating a brand new react element under the hood
    document.getElementById('app')
)