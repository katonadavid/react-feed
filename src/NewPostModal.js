import './NewPostModal.css'

function NewPostModal( props ) {

    let form = {
        author: '',
        avatar: '',
        title: '',
        body: ''
    }

    return (
        <div className="new-feed-modal">
            <div className="modal-main">
                <div>
                    <button onClick={ props.onClose }>Close</button>
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input type="text" name="author" id="author" onChange={ event => { form.author = event.target.value } }/>
                </div>
                <div className="form-group">
                    <label htmlFor="avatar">Avatar URL</label>
                    <input type="text" name="avatar" id="avatar" onChange={ event => { form.avatar = event.target.value } }/>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" onChange={ event => { form.title = event.target.value } }/>
                </div>
                <div className="form-group">
                    <label htmlFor="body">Post</label>
                    <textarea name="body" id="body" cols="30" rows="10" style={{resize: 'none'}}
                    onChange={event => { form.body = event.target.value }} placeholder="Write your thoughts here..."/>
                </div>
                <button onClick={ () => {
                    props.addPost( form.author, form.avatar, form.title, form.body )
                }}>Add Post</button>
            </div>
        </div>
    );

}

export default NewPostModal;