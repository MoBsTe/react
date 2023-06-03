import React from 'react'
import Cam from '../img/cam.png'
import Add from '../img/add.png'
import More from '../img/more.png'
import { Messenges } from './Messenges'
import { Input } from './Input'

export const Chat = () => {
    return (
        <div className='chat'>
            <div className='chatInfo'>
                <span>Test</span>
                <div className='chatIcons'>
                    <img src={Cam} alt="" />
                    <img src={Add} alt="" />
                    <img src={More} alt="" />
                </div>
            </div>
            <Messenges />
            <Input />
        </div>
    )
}
