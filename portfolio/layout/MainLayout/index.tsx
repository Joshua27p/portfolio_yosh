import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import style from './MainLayout.module.scss'

const MainLayout: MainLayout = ({children}) => {
  return (
    <div className={style.homeContainer} >
      <Header />
      <main>
        {children}
      </main>
      <Footer />  
    
    </div>
  )
}

export default MainLayout