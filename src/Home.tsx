import React, {useEffect, useState} from "react";
import {ThreadRoot} from "./ThreadRoot";
import axios from "axios";
import {Link} from "react-router-dom";

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
            {threads.map((thread: ThreadRoot) => (
                <div className="Thread-row">
                    <div className="Thread-item">{thread.date.toLocaleString()}</div>
                    <div className="Thread-item">{thread.author}</div>
                    <div className="Thread-item"><Link to={`post/${thread.rootId}`}>{thread.title}</Link></div>
                </div>
            ))}
        </div>
    )
}

export default Home;
