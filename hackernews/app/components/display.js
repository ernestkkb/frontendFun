import React from 'react'
import {getPopularStories, getStory} from '../utils/api'
import Card from './card'

function NewsGrid({news}){
    return (
        <ul>
            {
                news.map((storyID) => {
                    getStory(storyID).then((story) => {
                        const {by, descendants, id, kids, score, time, title, type, url} = story
                        return (
                            <li key = {id}>
                                <Card 
                                    title = {title}
                                    author = {by}
                                    time = {time}
                                    comments = {descendants} 
                                />
                            </li>
                        )
                    })
                })
               
            }
        </ul>
    )
}

export default class Display extends React.Component{
    state = {
        stories: null,
        loading: true,
        error: false
    }

    componentDidMount(){
        this.updateStories()
    }

   updateStories = () => {
       
        getPopularStories()
       .then((data) => {
        this.setState({
            stories: data,
            loading: false
        })
       })
       .catch((error) => {
           console.warn('Error fetching stories: ', error)
            this.setState({
                error: true,
                loading: false
            })
       })
   }


     render(){
         const {loading, error, stories} = this.state
        return (
            <React.Fragment>
                {/* {JSON.stringify(this.state.stories, null, 2)} */}
                {loading && <p>Loading</p>}
                {error && <p>Error</p>}
                {stories && <NewsGrid news = {stories} />}
          </React.Fragment>
        )
    }
}