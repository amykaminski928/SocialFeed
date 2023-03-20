


const DiplayPosts = ({posts}) => {
    return ( 
        <div>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>{post}</li>
                ))}
            </ul>
        </div>
     );
}
 
export default DiplayPosts;