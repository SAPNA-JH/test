import React from 'react'
import './Test.css'
function Test() {
  return (
    <div className='container'>
        <div className='container-item'>
          <img className='image' src="https://randomuser.me/api/portraits/men/14.jpg" alt="pic" />
          <div className=' info'>
            <span>Sapna Jha</span>
            <span>A learnning Developer</span>
          </div>
            <div className='items'>contact us</div>
           <div className='items'>Youtube</div>
           <div className='items'>login</div>
           <div className='items'>Instagram</div>
           <div className='items'>facebook</div>
           <div className='items'>sign up</div>
        </div>
    </div>
  )
}

export default Test
