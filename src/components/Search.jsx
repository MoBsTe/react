import React from 'react'

export const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder='find a user' />
            </div>
            <div className="userChat">
                <img src="https://cdn.pixabay.com/photo/2016/12/04/02/01/celtic-woman-1880944__340.jpg" alt="woman" />
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>
        </div>
    )
}
