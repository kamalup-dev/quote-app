import QuoteForm from "../components/quotes/QuoteForm";
import {useNavigate} from "react-router-dom"
import useHttp from "../hooks/use-http";
import {addQuote} from "../lib/api"
import { useEffect } from "react";

const Compose = () => {
    const navigate = useNavigate()
    const {sendRequest, status} = useHttp(addQuote)

    useEffect(()=>{
      if(status === 'completed'){
          navigate('/all-quotes')
      }
    },[status, navigate])

    const onAddQuote = (quoteData) => {
        sendRequest(quoteData)
    }
  return (
    <>
        <QuoteForm isLoading={status === 'pending'} onAddQuote={onAddQuote}/>
    </>
  );
};

export default Compose;
