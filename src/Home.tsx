import React, {useEffect, useState} from "react";
import {Thread} from "./Thread";
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
            </div>
            {threads.map((thread: Thread) => (
                <div className="Thread-row">
                    <div className="Thread-item">{thread.date.toLocaleString()}</div>
                    <div className="Thread-item">{thread.author}</div>
                    <div className="Thread-item">{thread.title}</div>
                </div>
            ))}
        </div>
    )
}

export default Home;
