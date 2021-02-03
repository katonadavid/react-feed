import './Feed.css';
import Post from './Post';
import React from "react";
import NewPostModal from "./NewPostModal";

class Feed extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      posts: [
        {
          id: 1,
          author: 'Kiss Adam',
          avatarUrl: 'https://picsum.photos/id/68/200',
          title: 'Kecskere kaposztat',
          body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat saepe dignissimos id consequatur laborum fuga blanditiis delectus iste ipsa facilis!',
          comments: [
            {
              id: 1,
              text: 'Hat ez fasza'
            },
            {
              id: 2,
              text: 'Oak, oida!'
            },
            {
              id: 3,
              text: 'Necessitatibus tempore repellat totam assumenda perferendis deserunt sapiente. Eius temporibus, fuga est oditsint a, illo totam quasi deleniti'
            }
          ]
        },
        {
          id: 2,
          author: 'Vampir Geza',
          avatarUrl: 'https://picsum.photos/id/54/200',
          title: 'Tüzeset ibranba',
          body: `Numquam ut atque consectetur officia alias voluptas delectus neque corrupti totam, 
      ipsa vero placeat error exercitationem doloremque temporibus odit accusamus fugiat culpa molestias 
      sit nulla repellat provident. Obcaecati minus voluptate excepturi odio totam consectetur incidunt ipsum, 
      eius eveniet id soluta molestias culpa amet et, libero quibusdam nulla exercitationem, commodi facilis? 
      Recusandae nobis commodi dolore repellendus vel earum suscipit totam cum? Reprehenderit quae non obcaecati
       animi sunt quisquam, at, assumenda consectetur cumque expedita quas doloremque ex excepturi labore. Enim, in libero? 
       Distinctio necessitatibus tempore repellat totam assumenda perferendis deserunt sapiente. Eius temporibus, fuga est odit
        sint a, illo totam quasi deleniti ipsum alias tempora laborum? Totam ipsam illo, placeat optio vero fuga eveniet ad a
         aperiam numquam voluptate perspiciatis quisquam obcaecati neque? Provident quisquam ipsum repellat ducimus modi, dignissimos
          mollitia odio inventore laboriosam! Corrupti dicta molestias sit rerum neque suscipit, impedit cupiditate necessitatibus
           vero. Sed neque officiis, laboriosam eos inventore tempora cumque! At rerum quae deleniti perspiciatis vel sapiente suscipit? 
           Id minima fugit magni eius pariatur! Vitae nesciunt tenetur totam explicabo in rerum repellendus architecto, eum perspiciatis. 
           Enim saepe repudiandae architecto. Distinctio fugiat tenetur hic officiis ducimus praesentium totam, dicta, laboriosam quam inventore repellendus. 
           Aperiam vitae deserunt consequuntur minus! Corporis cupiditate obcaecati consectetur. Non nulla quas placeat vel voluptatum dolore? `,
          comments: [
            {
              id: 1,
              text: 'Na ne maaar'
            },
            {
              id: 2,
              text: 'mmmm en eloototam volna'
            }
          ]
        }
      ],
      addingPost: false
    }
  }

  saveComment = ( postID, comment ) => {
    const newPost = this.state.posts.filter( ( post ) => {
      return post.id === postID;
    })[0];

    const lastCommentID = newPost.comments.reduce( ( latestComment, comment ) => comment.id > latestComment.id ? comment : latestComment ).id;

    newPost.comments.push({
      id: lastCommentID + 1,
      text: comment
    });

    this.setState({
      posts: this.state.posts.map( post => post.id === postID ? newPost : post )
    })
  }

  savePost = ( author, avatarUrl, title, body ) => {

    const lastPostID = this.state.posts.reduce( ( latestPost, post ) => post.id > latestPost.id ? post : latestPost ).id;

    this.setState({
      posts: this.state.posts.concat([
        {
          id: lastPostID + 1,
          title,
          body,
          author,
          avatarUrl,
          comments: []
        }
      ])
    });
    this.toggleNewPostModal();
  }

  toggleNewPostModal = () => {
    this.setState({
      addingPost: !this.state.addingPost
    })
  }

  render() {
    return (
        <div>
          { this.state.addingPost && <NewPostModal addPost={ this.savePost } onClose={ this.toggleNewPostModal } /> }
          <div>
            <button onClick={ this.toggleNewPostModal }>Add Post</button>
          </div>
          <div className="feed">
            {
              this.state.posts.map( post => {
                return (
                    <Post key={ post.id } id={ post.id } author={ post.author } avatarUrl={ post.avatarUrl } title={ post.title }
                          body={ post.body } comments={ post.comments } addComment={ this.saveComment }/>
                );
              })
            }
          </div>
        </div>
    );
  }
}

export default Feed;
