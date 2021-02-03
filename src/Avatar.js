import './Avatar.css';

function Avatar(props) {

    return (
        <div className="avatar-frame">
            <img src={ props.url } alt={ props.user } title={ props.user }/>
        </div>
    );

}

export default Avatar;