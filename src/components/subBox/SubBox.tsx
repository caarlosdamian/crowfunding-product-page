import React from 'react'
import './SubBox.scss'


interface SubBoxProps {
    title: string,
    price: number,
    description: string,
    
}

export const SubBox = () => {
  return (
    <div className='subcription-box-wrapper'>
        <div className="subcription-top-container">
    <span className="subcription-header"></span>
        </div>
    </div>
  )
}
