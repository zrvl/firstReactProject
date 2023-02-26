import React from 'react'

const Comments = (props) => {
  return (
    <>
      <p className="post-page__text">
        Comments
      </p>
      {
        props.comments.length === 0 ? 
          <div>Empty</div>
          :
        props.comments.map((comment,idx) => <li className="post-page__comment" key={idx}>
          <span className="post-page__comment-num">{++idx}</span>
          {comment.name}
        </li>)
      }
    </>
  )
}

export default Comments