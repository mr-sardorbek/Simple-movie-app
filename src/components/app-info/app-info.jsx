import React from 'react'
import '../app-info/app-info.css'

const AppInfo = ({allMoviesCount, favouriteMoviesCount}) => {
  return (
    <div className='app-info'>
      <p className='fs-1  text-red-700 text-center mb-128'>Movie App</p>
      <p className='fs-3 text-uppercase'>Barcha kinolar soni: {allMoviesCount}</p>
      <p className='fs-4 text-uppercase'>Ko'rilgan kinolar soni: {favouriteMoviesCount}</p>
    </div>
  )
}

export default AppInfo