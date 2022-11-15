import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import PostAPI from '../API/PostAPI';
import { useRequest } from '../hooks/useRequest';
import Loader from '../components/UI/Loader/Loader';
import OnePost from '../components/OnePost';
import ButtonBack from '../components/UI/ButtonBack/ButtonBack';
import Comments from '../components/Comments';


function PostPage() {
  const [onePost, setOnePost] = useState([]);
  const [comments, setComments] = useState([]);
  const {id} = useParams()

  const [requestPost, loadingPost, errorPost] = useRequest(async ()=> {
    const [response] = await PostAPI.getOne(id);
    setOnePost(response);
  })

  const [requestComment, errorComment] = useRequest(async ()=> {
    const [response] = await PostAPI.getComment(id);
    setComments(response);
  })
  
  useEffect(() => {
    requestPost();
    requestComment();
  }, [])

  if (loadingPost) {
    return <Loader />
  } else {
      return (
      <div className="post-page">
        <OnePost post={onePost} />
        <ButtonBack />
        <div className="post-page__comments">
          <Comments comments={comments} />
        </div>
      </div>
    )
  }
}

export default PostPage