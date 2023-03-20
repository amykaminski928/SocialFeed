import React from 'react';
import './App.css';
import Post from './Components/Post/Post';

function App() {
    return (   
        <div className='container-fluid'>
            <div className='container'>
                <h3 style={{margin:'1em'}}>Social
                <small className= 'text-muted'>FEED</small></h3>
                <div className= 'form-inline justify-content-center' >
                    <div>
                        <Post />    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
