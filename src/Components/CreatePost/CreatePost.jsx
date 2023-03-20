import React, { useState } from 'react';

// Child 1 = Form Page: Gets values and saves in the parent component (App).

const CreatePost = (props) => {

    const [userName, setUserName] = useState('');
    const [post, setPost] = useState('');
 
    
    function handleSubmit(event) {
        event.preventDefault();
        let newPost ={
            userName: (userName),
            post: (post)
        };
        props.onAddPost(newPost);
        setUserName('');
        setPost('');
        
    }


    return ( 
        <form onSubmit={handleSubmit} className="form-grid">
            <div className='form-group'>
                <label>Name</label>
                <input type = 'text' className="form-control" value={userName} onChange={(event) => setUserName(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>'Sup?:</label>
                <input type= 'text' className="form-control" value={post} onChange={(event) => setPost(event.target.value)}/>
            </div>
            <button type= 'submit' className="btn btn-outline-primary" style={{'margin-top': '1em'}}>SHARE</button>
        </form>
     );
};
 
export default CreatePost;


 

