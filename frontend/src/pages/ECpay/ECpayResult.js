import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


function ECpayResult () {
  return(
    <div style={{width: '30%', margin: '0 auto'}}>
      <p>付款成功</p>
      <Link to='/' className='coffeeDarkBtn' style={{width: '100px'}}>回首頁</Link>
    </div>
  )
}

export default ECpayResult