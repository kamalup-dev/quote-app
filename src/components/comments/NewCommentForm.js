import { useRef, useEffect } from 'react';
import useHttp from '../../hooks/use-http';
import classes from './NewCommentForm.module.css';
import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const {onAddComment} = props
  const {sendRequest, status, error} = useHttp(addComment)

  useEffect(()=>{
    if(status === 'completed' && !error){
      onAddComment()
    }
  },[onAddComment, status, error])

  const submitFormHandler = (event) => {
    event.preventDefault();
    const eneterdText = commentTextRef.current.value
    // optional: Could validate here
    sendRequest({commentData: {text: eneterdText}, quoteId: props.quoteId})
  };    

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
    {status === 'pending' && <div className='centered'>
    <LoadingSpinner />
    </div>}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
