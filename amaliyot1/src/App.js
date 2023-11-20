import React from 'react'
import Header from './Header/Header'
import './style.css'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import './Responsive.css'

const App = () => {
  return (
    <div className='sayt'>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App