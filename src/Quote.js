import React from 'react'
import QuoteContent from './QuoteContent'
import QuoteAuthor from './QuoteAuthor'


function Quote({dataQuote, getQuotesByAuthor}){
    return (
        <div className="content">
            <QuoteContent dataQuote={dataQuote}></QuoteContent>
            <QuoteAuthor dataQuote={dataQuote} getQuotesByAuthor={getQuotesByAuthor} />
        </div>
    )
}

export default Quote
