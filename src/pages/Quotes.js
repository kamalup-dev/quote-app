import React, { useEffect } from 'react'
import QuoteList from '../components/quotes/QuoteList'
import NoQuotesFound from '../components/quotes/NoQuotesFound'
import useHttp from '../hooks/use-http'
import { getAllQuotes } from '../lib/api'
import LoadingSpinner from '../components/UI/LoadingSpinner'

const Quotes = () => {
  const {sendRequest, status, error, data: loadedQuotes} = useHttp(getAllQuotes, true)

  useEffect(()=>{
    sendRequest()
  },[sendRequest])

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
  if(status === 'completed' && (!loadedQuotes || loadedQuotes.length===0)){
      return <>
        <NoQuotesFound />
      </>
  }

  return (
    <>
      <QuoteList quotes={loadedQuotes} />
    </>
  )
}

export default Quotes