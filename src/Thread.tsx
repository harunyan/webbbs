import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {ThreadItem} from "./ThreadItem";

const Thread = () => {
    const threadId = useLocation().pathname.split('/').reverse()[0];

    const [replies, setReplies] = useState([]);

    const fetchReplies = async () => {
        const response = await axios.get("http://localhost:3001/" + threadId);
        setReplies(response.data);
    }

    useEffect(() => {
        fetchReplies();
    }, []);

    return (
        <div>
            <div>スレッド: {threadId}</div>
            {replies.map((reply: ThreadItem) => (
                <div>
                    <div>{reply.date.toLocaleString()}</div>
                    <div>{reply.author}</div>
                    <div>{reply.body}</div>
                </div>
            ))}
        </div>
    )
}

export default Thread;
