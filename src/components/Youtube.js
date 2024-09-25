import React from 'react'
import ReactPlayer from 'react-player'
import './Youtube.css'

function Youtube () {
    return( 
        <div className='player-wrapper' style={{ backgroundColor: 'black' }}>
          <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=rL4Thq8L_Tk'
          width='100%'
          height='100%'
        />
      </div>   
    )};

  export default Youtube;

