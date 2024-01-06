import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {ThreadItem} from "./ThreadItem";

const Thread = () => {
    const {state} = useLocation();

    const threadId = state.rootId;
    // const url = useLocation().pathname.split('/')
    // const nest = url.length;

    const [replies, setReplies] = useState([]);

    const fetchReplies = async () => {
        try {
            const response = await axios.get("http://localhost:3001/" + threadId);
            setReplies(response.data);
        } catch (err)
        {
            // 404 Not Found のときには何もしない
        }
    }

    useEffect(() => {
        fetchReplies();
    }, []);

    return (
        <div>
            {threadId}
            <div className="Thread-table">
                <div className="Thread-row">
                    <div className="Thread-header">投稿日</div>
                    <div className="Thread-header">投稿者</div>
                    <div className="Thread-header">本文</div>
                </div>
                <div className="Thread-row">
                    <div className="Thread-item">{state.date.toLocaleString()}</div>
                    <div className="Thread-item">{state.author}</div>
                    <div className="Thread-item">{state.body}</div>
                </div>
                {replies.map((reply: ThreadItem) => (
                    <div className="Thread-row">
                        <div className="Thread-item">{reply.date.toLocaleString()}</div>
                        <div className="Thread-item">{reply.author}</div>
                        <div className="Thread-item">{reply.body}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Thread;
