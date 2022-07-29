import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentList from './CommentsList'

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const {id} = useParams()
  
  const {sendRequest, status, data: loadedComments} = useHttp(getAllComments)

  

  useEffect(()=>{
    sendRequest(id)
  },[sendRequest, id])
 
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    
    sendRequest(id)
  },[sendRequest, id])

  let comments;

  if(status === 'pending'){
      comments = (
        <div className='centered'>
          <LoadingSpinner />
        </div>
      )
  }
  if(status === 'completed' && (loadedComments && loadedComments.length > 0)){
    comments = <CommentList comments={loadedComments} />
  }
  if(status === 'completed' && (!loadedComments || loadedComments.length===0)){
    comments = <p className='centered'>
      No comments were added yet!
    </p>
  }
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={id} onAddComment={addedCommentHandler}/>}
      {comments}
    </section>
  );
};

export default Comments;
