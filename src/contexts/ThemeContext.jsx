import React, { createContext, useState } from 'react'

import { themeData } from '../data/themeData.js'

export const ThemeContext = createContext({...themeData})

function ThemeContextProvider(props) {
    // eslint-disable-next-line
    const [theme, setTheme] = useState(themeData.theme)
    const [drawerOpen, setDrawerOpen] = useState(false)

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }



    const value = { theme, drawerOpen, setHandleDrawer }
    console.log(theme)
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider