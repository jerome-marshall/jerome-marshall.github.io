import React from 'react'
import { useTheme } from "next-themes"
import Header from './Header'

const Layout = ({children}) => {
    const { theme, setTheme } = useTheme()

  return (
    <div className='h-screen dark:bg-dark-background_1 bg-background_1 px-6'>
      <Header />
      {children}
    </div>
  )
}

export async function getStaticProps() {

}

export default Layout̥