import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export const MyImg = () => (
  <Zoom>
    <img
      alt="human Body"
      src="/src/assets/human-transparent.png"
        className="h-[100%] w-[100%] object-cover"
      
    />
  </Zoom>
)