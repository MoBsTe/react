import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from './Message';

export const Messages = () => {
    const [messages, setMessages] = useState([]);
    const { data } = useContext(ChatContext);

    useEffect(() => {
        const unSub = onSnapshot(doc(db, 'chats', data.chatId), (doc) => {
            doc.exists() && setMessages(doc.data().messages);
        });

        return () => {
            unSub();
        };
    }, [data.chatId]);

    console.log(messages)

    return (
        <div className='messages'>
            {messages.map((m) => (
                <Message message={m} key={m.id} />
            ))}
        </div>
    )
}

// export const Messages = () => {
//     const [messages, setMessages] = useState([]);
//     const { data } = useContext(ChatContext);

//     useEffect(() => {
//         const unSub = onSnapshot(doc(db, 'chats', data.chatId), (doc) => {
//             if (doc.exists()) {
//                 const chatData = doc.data();
//                 if (chatData && chatData.messages) {
//                     setMessages(chatData.messages);
//                 } else {
//                     setMessages([]); // Set an empty array or any other default value.
//                 }
//             } else {
//                 setMessages([]); // Set an empty array or any other default value.
//             }
//         });

//         return () => {
//             unSub();
//         };
//     }, [data.chatId]);

//     console.log(messages)

//     return (
//         <div className='messages'>
//             {messages.map((m) => (
//                 <Message message={m} key={m.id} />
//             ))}
//         </div>
//     )
// }
