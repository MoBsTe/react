import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import { Messenge } from './Messenge';

export const Messenges = () => {
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
                <Messenge messages={m} key={m.id} />
            ))}
        </div>
    )
}
