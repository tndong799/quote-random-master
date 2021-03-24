import React from 'react'

function QuoteContent({dataQuote}) {
    return (
        <div className="quote">
            "{dataQuote.quoteText}"
            </div>
    )
}

export default QuoteContent
