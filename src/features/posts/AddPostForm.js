import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const [requestStatus, setRequestStatus] = useState('idle');

    const users = useSelector(selectAllUsers);

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onUserChanged = e => setUserId(e.target.value);

    const canSave = [title, content, userId].every(Boolean) && requestStatus === 'idle';

    const onSavePostClicked = () => {
        if (canSave) {
            try {
                setRequestStatus('pending')
                dispatch(addNewPost({ title, body: content, userId })).unwrap()

                setTitle('')
                setContent('')
                setUserId('')
                navigate('/')
            } catch (err) {
                console.error('Failed to save the post', err)
            } finally {
                setRequestStatus('idle')
            }
        }
    }

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <section>
            <h2>Add a new post</h2>
            <form action="">
                <label htmlFor="postTitle">Post Title:</label>
                <input 
                    type="text"
                    id='postTitle'
                    name='postTitle'
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onUserChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>
                <label htmlFor="postTitle">Content:</label>
                <input 
                    type="text"
                    id='postContent'
                    name='postContent'
                    value={content}
                    onChange={onContentChanged}
                />
                <button 
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm;