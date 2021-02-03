
function CommentInput( props ) {

    const handleKeyUp = ( event ) => {

        console.log( event.target.value )
        if( event.key === 'Enter' ) {
            props.onSave( props.postID, event.target.value );
            event.target.value = '';
        }
    }

    return (
        <input type="text" name="comment" placeholder="Your comment..." onKeyUp={ handleKeyUp }/>
    );

}

export default CommentInput;