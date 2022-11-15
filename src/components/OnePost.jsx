import React from 'react'

const OnePost = (props) => {
  return (
    <div className="post-page__title">
      {
        props.post.title
      }
    </div>
  )
}

export default OnePost