import React from 'react'

const Comments = (props) => {
  let element = 0;
  return (
    <>
      <p className="post-page__text">
        Comments
      </p>
      {
        props.comments.map(comment => <li className="post-page__comment" key={element}>
          <span className="post-page__comment-num">{++element}</span>
          {comment.name}
        </li>)
      }
    </>
  )
}

export default Comments