import React from 'react'
export function getPopularStories(){
    return fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then((res) => res.json())
}

export function getStory(id){
    return (
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        .then((res) => res.json())
    )
}