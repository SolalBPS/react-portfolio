import '../Style/App.css';
import { getLastPosts, createPost } from '../APIs/blogApi';
import { useEffect, useState } from 'react';
import Post from './Post'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { checkAuth } from '../APIs/authApi';

function Blog() {
    const [lastPosts, setLastPosts] = useState([]);
    // Cration de post
    const [createMode, setCreateMode] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState([]);

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

    const changeCreateMode = () => {
        setCreateMode(!createMode);
    }

    const sendPost = () => {
        if (title && body) {
            setCreateMode(!createMode);
            createPost(title, body, tags, sessionStorage.getItem('userId')).then(data => {
                setLastPosts([data, ...lastPosts])
            });
        }
    }

    return (
        <>
            <div className='h-100 d-flex flex-column align-items-center flex-row text-body-secondary fs-5' style={{ minHeight: '85vh' }}>
                <h1 className='my-5'>Blog</h1>

                <div className='w-50 d-flex flex-column justify-content-center align-items-end bg-body-secondary rounded-4 p-4 mb-5 border border-secondary'>
                    <button className='btn btn-outline-success rounded' onClick={changeCreateMode}>
                        New post <FontAwesomeIcon icon='fa-solid fa-plus' size='lg' />
                    </button>

                    {/* Création */}
                    {createMode &&
                        <div className='w-100 d-flex flex-column align-items-center gap-3 mt-3 bg-body-tertiary rounded-4 p-3'>
                            <div className='w-100 d-flex flex-row align-items-center gap-3 pb-2 border-bottom border-danger'>
                                <FontAwesomeIcon icon='fa-solid fa-comments' size='xl' className='text-danger' />
                                <input type='text' className='form-control' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <textarea className='form-control' placeholder='Body' value={body} onChange={(e) => setBody(e.target.value)} />
                            {/* Gère les tags à partir d'une chaine (tags séparés par ',') */}
                            <input type='text' className='form-control' placeholder="Tags (separated by ',')" value={tags.join(',')} onChange={(e) => setTags(e.target.value.split(','))} />
                            <button className='btn btn-outline-success w-25' onClick={sendPost}>
                                Send <FontAwesomeIcon icon='fa-solid fa-paper-plane' size='lg' />
                            </button>
                        </div>
                    }

                    {/* Posts */}
                    {lastPosts.length > 0
                        ? lastPosts.map((post) => {
                            return (
                                <Post key={post.id} data={post} deletePost={deletePost} />
                            )
                        })
                        : <FontAwesomeIcon icon='fa-solid fa-spinner' spin className='fs-1' />
                    }
                </div>
            </div>
        </>
    );
}

export default Blog;
