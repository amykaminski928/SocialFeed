// import React, { useState } from 'react';
// const AddPostForm = (props) => {

//     const [userName, setUserName] = useState('');
//     const [post, setPost] = useState('');
    
//     function handleSubmit(event) {
//         event.preventDefault();
//         let newEntry ={
//             name: (userName),
//             post: (post)
//         };
//         console.log(newEntry);
//         props.addPostProperty(newEntry)
//     }


//     return ( 
//         <form onSubmit={handleSubmit} className="form-grid">
//             <div className='form-group'>
//                 <label>Name</label>
//                 <input type = 'text' className="form-control" value={userName} onChange={(event) => setUserName(event.target.value)}/>
//             </div>
//             <div className='form-group'>
//                 <label>Post</label>
//                 <input type= 'text' className="form-control" value={post} onChange={(event) => setPost(event.target.value)}/>
//             </div>
//             <button type= 'submit' className="btn btn-outline-primary" style={{'margin-top': '1em'}}>CREATE</button>
//         </form>
//      );
// }
 
// export default AddPostForm;


 

