import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Style/App.css';
import { useState } from 'react';
import { getPostComments, deletePost, editPost } from '../APIs/blogApi';

function Post(props) {
    // Datas
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);
    const [comments, setComments] = useState([]);
    // Modes
    const [showDetails, setShowDetails] = useState(false);
    const [editMode, setEditMode] = useState(false);
    // Edit mode inputs
    const [editedTitle, setEditedTitle] = useState(props.title);
    const [editedBody, setEditedBody] = useState(props.body);

    const displayPostDetails = () => {
        setShowDetails(!showDetails);
        if (editMode) setEditMode(false);
        getPostComments(props.postId).then(data => {
            setComments(data);
        });
    }

    const removePost = () => {
        if (window.confirm('Do you really want to delete this post?')) {
            deletePost(props.postId).then(data => {
                if (data.isDeleted === true) {
                    props?.deletePost(props.postId);
                }
            });
        }
    }

    const changeEditMode = () => {
        setEditMode(!editMode);
    }

    const savePost = () => {
        if (window.confirm('Do you really want to edit this post?')) {
            editPost(props.postId, editedTitle, editedBody).then(data => {
                setTitle(data.title)
                setBody(data.body)
            });
        }

        setEditMode(!editMode);
    }

    return (
        <>
            <div className='d-flex flex-column align-items-start justify-content-center w-100 bg-body-tertiary rounded-4 my-3 p-3 shadow-sm'>
                <div className='d-flex flex-row align-items-center justify-content-between w-100 pb-2 mb-2 border-bottom border-danger'>
                    <div className='d-flex flex-row gap-3 w-100'>
                        <FontAwesomeIcon icon='fa-solid fa-user' size='xl' className='text-danger' />
                        {editMode
                            ? <input type='text' className='form-control w-100' value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
                            : <h3 className='mb-0'>{title}</h3>
                        }
                    </div>

                    {showDetails && (
                        <div className='d-flex flex-row gap-2 ms-2'>
                            {/* Modifier/Valider */}
                            {
                                editMode
                                    ? (
                                        <button className='icon-btn btn btn-outline-success d-flex align-items-center justify-content-center rounded' onClick={savePost}>
                                            <FontAwesomeIcon icon='fa-solid fa-check' size='lg' />
                                        </button>
                                    )
                                    : (
                                        <button className='icon-btn btn btn-outline-primary d-flex align-items-center justify-content-center rounded' onClick={changeEditMode}>
                                            <FontAwesomeIcon icon='fa-solid fa-pen' size='lg' />
                                        </button>
                                    )
                            }
                            {/* Supprimer */}
                            <button className='icon-btn btn btn-outline-danger d-flex align-items-center justify-content-center rounded' onClick={removePost}>
                                <FontAwesomeIcon icon='fa-solid fa-trash-can' size='lg' />
                            </button>
                        </div>
                    )}
                </div>

                {/* Contenu */}
                {editMode
                    ? (
                        <div className='d-flex flex-column gap-3 w-100'>
                            <textarea className='form-control' value={editedBody} onChange={(e) => setEditedBody(e.target.value)} style={{ minHeight: '150px' }} />
                        </div>
                    )
                    : <p className='mb-0'>{body}</p>
                }

                {/* Bouton détails & Tags */}
                <div className='d-flex flex-row justify-content-between w-100 fst-italic py-2'>
                    <button className=' btn btn-outline-danger d-flex align-items-center justify-content-center rounded gap-2' onClick={displayPostDetails}>
                        Details <FontAwesomeIcon icon={`fa-solid fa-arrow-${showDetails ? 'up' : 'down'}`} className='shake-hover' size='lg' />
                    </button>

                    <div className='d-flex flex-row align-items-center gap-2'>
                        {props.tags.map((tag, index) => {
                            return (
                                <span key={index} className='badge bg-danger'>{tag}</span>
                            )
                        })}
                    </div>
                </div>

                {/* Commentaires */}
                {showDetails && (
                    <div className='d-flex flex-column gap-3 border-top w-100 pt-2'>
                        {comments.length > 0
                            ? comments.map((comment, index) => {
                                return (
                                    <div key={index} className='d-flex flex-column align-items-start justify-content-start bg-body-secondary rounded-4 p-3 shadow-sm'>
                                        <div className='d-flex flex-row align-items-center w-100 pb-2 mb-2 gap-3 border-bottom border-danger post'>
                                            <FontAwesomeIcon icon='fa-solid fa-comment' size='xl' className='text-danger' />
                                            <h4 className='mb-0'>{comment.user.username}</h4>
                                        </div>

                                        <p className='mb-0 fs-5'>{comment.body}</p>
                                    </div>
                                )
                            })
                            : <FontAwesomeIcon icon='fa-solid fa-spinner' spin className='fs-1' />
                        }
                    </div>
                )}
            </div>
        </>
    );
}

export default Post;
