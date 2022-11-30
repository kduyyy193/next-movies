import React from 'react'

interface MovieHeading {
    heading: string
}

const MovieListHeading = (props: MovieHeading) => {
  return (
    <div>
        <h1 className='text-3xl font-semibold m-4 tracking-widest'>{props.heading}</h1>
    </div>
  )
}

export default MovieListHeading