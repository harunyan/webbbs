import React, {useEffect, useState} from "react";
import {ThreadRoot} from "./ThreadRoot";
import {Link} from "react-router-dom";
import axios from "axios";

const Home = () => {
    const [threads, setThreads] = useState([]);

    const fetchThreads = async () => {
        const response = await axios.get("http://localhost:3001/posts");
        setThreads(response.data);
    }

    useEffect(() => {
        fetchThreads();
    }, []);

    return (
        <div className="Thread-table">
            <div className="Thread-row">
                <div className="Thread-header">投稿日</div>
                <div className="Thread-header">投稿者</div>
                <div className="Thread-header">タイトル</div>
                <div className="Thread-header">本文</div>
            </div>
            {threads.map((thread: ThreadRoot) => (
                <div className="Thread-row">
                    <div className="Thread-item">{thread.date.toLocaleString()}</div>
                    <div className="Thread-item">{thread.author}</div>
                    <div className="Thread-item"><Link to={`post/${thread.rootId}`} state={thread}>{thread.title} : {thread.rootId}</Link></div>
                    <div className="Thread-item">{thread.body}</div>
                </div>
            ))}
        </div>
    )
}

export default Home;
