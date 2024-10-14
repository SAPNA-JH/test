import React from 'react'
import './Frontend.css'

function Frontend() {
  return (
    <div className='container'>
      <div className='inner-container'>
        <div className='item1'>
            Your Result <br />
            < div className='small-item1'>
              <h1></h1>
             
            

            </div>
            Great <br /> you Scored higher than 65% of <br /> the people who have taken <br />these tets.
        </div>
        <div className='item2'>
        <div id='small-item'> summary</div>
            <div className='small-item2'><button>+</button> 80 <button>-</button></div>
            <div className='small-item2'><button>+</button>92 <button>-</button></div>
            <div className='small-item2'><button>+</button>61 <button>-</button></div>
            <div className='small-item2'><button>+</button>72 <button>-</button></div>
            <div id='small-items'> continue</div>
        </div>
      </div>
    </div>
  )
}

export default Frontend
