import classes from "./HighlightedQuote.module.css";
import { useParams, Outlet } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";

const HighlightedQuote = (props) => {
  const { id } = useParams();
  const {sendRequest, status, error, data:loadedQuote} = useHttp(getSingleQuote, true)
  useEffect(()=>{
    sendRequest(id)
  },[sendRequest, id])

  if(status === 'pending'){
    return <div className='centered'>
      <LoadingSpinner />
    </div>
  }
  if(error){
    return <div className='centered focused'>
      {error}
    </div>
  }
  if(!loadedQuote.text){
    return <div>No Quotes Found</div>
  }
  return (
    <>
      <figure className={classes.quote}>
        <p>{loadedQuote.text}</p>
        <figcaption>{loadedQuote.author}</figcaption>
      </figure>
      <Outlet />
      
    </>
  );
};

export default HighlightedQuote;
