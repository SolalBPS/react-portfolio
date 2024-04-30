import '../Style/App.css';
import { getLastPosts } from '../APIs/blogApi';
import { useEffect, useState } from 'react';
import Post from './Post'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { checkAuth } from '../APIs/authApi';

function Blog() {
    const [lastPosts, setLastPosts] = useState([]);

    // Check le token au render
    useEffect(() => {
        if (!sessionStorage.getItem('token')) {
            window.location.href = '/login';
        } else {
            // Check validité du token
            checkAuth(sessionStorage.getItem('token')).then(data => {
                if (data?.name === 'TokenExpiredError') {
                    window.location.href = '/login';
                }
            });
        }
    }, []);

    // Requête les données au render
    useEffect(() => {
        getLastPosts(10).then(data => {
            setLastPosts(data)
        });
    }, []);

    const deletePost = (id) => {
        setLastPosts(lastPosts.filter(post => post.id !== id));
    }

    return (
        <>
            <div className="h-100 d-flex flex-column align-items-center flex-row text-body-secondary fs-5" style={{ minHeight: "85vh" }}>
                <h1 className="my-5">Blog</h1>

                <div className="w-50 d-flex flex-column justify-content-center align-items-center bg-body-secondary rounded-4 p-4 mb-5 border border-secondary">
                    {lastPosts.length > 0
                        ? lastPosts.map((post) => {
                            return (
                                <Post key={post.id} data={post} deletePost={deletePost} />
                            )
                        })
                        : <FontAwesomeIcon icon="fa-solid fa-spinner" spin className='fs-1' />
                    }
                </div>
            </div>
        </>
    );
}

export default Blog;
