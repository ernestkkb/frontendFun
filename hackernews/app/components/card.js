import React from 'react'

export default function Card ({title, author, time, comments}) {
    return(
        <div>
            <h2>{title}</h2>
            <p>{`by ${author} on ${new Date(time).toLocaleString()} with ${comments} comments`}</p>
        </div>
    )
}