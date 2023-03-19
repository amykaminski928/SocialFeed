import React from 'react';

const DisplayPosts = (props) => {
    return ( 
        <table className="table">
            <thead>
            What's Happening?:
            </thead>
            <tbody>
            {props.parentPosts.map((post, index) => {
                return(          
                <tr key={index}>
                    {/*<td>{index + 1}</td>*/}
                    <td>{post.Username}</td> 
                    <td>{post.post}</td> 
                </tr>
                );
            })}
            </tbody>
        </table>  
     );
}
 
export default DisplayPosts;