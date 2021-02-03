import './Post.css';
import Avatar from "./Avatar";
import Comment from './Comment';
import CommentInput from './CommentInput';

function Post(props) {
    
    return (
        <div className="post-frame">
            <div className="post">
                <div className="title">
                    <Avatar url={ props.avatarUrl } user={ props.author } />
                    <h3>{ props.title }</h3>
                </div>
                <div className="body">
                    <p>
                        { props.body }
                    </p>
                </div>
            </div>
            <div className="comment-frame">
                <div className="comments">
                    {
                        props.comments.map( comment => {
                            return ( <Comment key={ comment.id } text={ comment.text } />);
                        })
                    }
                    <div>
                        <CommentInput postID={ props.id } onSave={ props.addComment } />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;