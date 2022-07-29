import { Fragment } from 'react';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

import { useLocation, useNavigate } from 'react-router-dom';

const QuoteList = (props) => {
  const location = useLocation()
  const navigate = useNavigate()
  const queryParams = new URLSearchParams(location.search)
  const isSortedAsc = queryParams.get('sort') === 'asc'
  const sortingHandler = () => {
      navigate(`${location.pathname}?sort=${(isSortedAsc ? 'desc' : 'asc')}`)
  }
  const sortQuotes = (quotes) => {
    return quotes.reverse()
  }
  const sortedQuotes = sortQuotes(props.quotes)
  return (
    <>
    <div className={classes.sorting}>
      <button onClick={sortingHandler}>Sort {isSortedAsc? 'Descending':'Ascending'}</button>
    </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </>
  );
};

export default QuoteList;
