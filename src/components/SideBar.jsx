import React from 'react'
import { Navbar } from './Navbar'
import { Search } from './Search'
import { Chants } from './Chants'

export const SideBar = () => {
    return (
        <div className='sidebar'>
            <Navbar />
            <Search />
            <Chants />
        </div>
    )
}
