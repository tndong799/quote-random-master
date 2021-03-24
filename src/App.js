import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ReactLoading from 'react-loading'
import './App.css';
import Quote from './Quote'
import ListQuote from './ListQuote'


function App() {
  const [data, setData] = useState('');
  const [loadDone, setLoadDone] = useState(null);
  const [quotesByAuthor, setQuotesByAuthor] = useState(null);

  const getRandomQuote = async () => {
    setLoadDone(false)
    await axios.get('https://quote-garden.herokuapp.com/api/v3/quotes/random')
    .then((res) => {
      const randomData = res.data.data[0];
      setData(randomData)
    })
    .catch((error) => {
      console.log(error)
    })
    setLoadDone(true)
    setQuotesByAuthor(null)
  }

  const getQuotesByAuthor = async () => {
    setLoadDone(false)
    await axios.get(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${data.quoteAuthor}&limit=3`)
    .then((res) => {
      const quotesAuthor = res.data.data;
      setQuotesByAuthor(quotesAuthor)
    }).catch((error) => {
      console.log(error)
    })

    setLoadDone(true)
  }

  const handleDisplayQuote = () => {
    if(!loadDone){
      return <div className='loading'><ReactLoading type="bars" color='#F7DF94' height='5%' width='5%' /></div>
    }
    if(quotesByAuthor){
      return <ListQuote quoteAuthor={data.quoteAuthor} listQuote={quotesByAuthor}/>
    }
    if(data){
      return <Quote dataQuote={data} getQuotesByAuthor={getQuotesByAuthor}/>
    }
  }



  useEffect(() => {
    getRandomQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="quote-app">
      <div className="header">
        <p className="random-text">random</p>
        <span className="material-icons" onClick={() => getRandomQuote()}>
          cached
        </span>
      </div>

      
        {handleDisplayQuote()}
      


      <div className="footer">
        Create by TranNgocDong - Devchallenges.io
      </div>
    </div>
  );
}

export default App;
