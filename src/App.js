import React, { Component } from 'react';
import './App.css';
import loader from './loader.svg';
const FontAwesome = require('react-fontawesome');


class App extends Component{
  constructor(){
    super();
    this.state={
      quoteText:'',
      quoteAuthor:'',
      longQuoteClass:'quote-text'
    }
  }
  componentDidMount(){
    this.fetchQuote();
  }
  fetchQuote=async ()=>{
    this.setState({quoteText:'',quoteAuthor:''})
    const proxyUrl='https://salty-woodland-36841.herokuapp.com/'
    const apiUrl='http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    const quote={quoteText:'',quoteAuthor:''}
    try{
      const response=await fetch(proxyUrl+apiUrl);
      const data=await response.json();
      quote.quoteText=data.quoteText;
      quote.quoteAuthor=data.quoteAuthor;
      if(data.quoteText.length>100){
        this.setState({longQuoteClass:'long-quote'})
      }else{
        this.setState({longQuoteClass:'quote-text'})
      }
    }catch(err){
      this.fetchQuote();
    }finally{
      this.setState({isLoading:false})
      quote.quoteAuthor===""?
      this.setState({quoteText:quote.quoteText,quoteAuthor:'Unkown'}):
      this.setState({quoteText:quote.quoteText,quoteAuthor:quote.quoteAuthor});  
    }
  }
  tweetQuote=()=>{
    const quote=this.state.quoteText;
    const author=this.state.quoteAuthor;
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quote}-${author}`;
    window.open(twitterUrl,'_blank');
  }
  render(){
    return (
      this.state.quoteText===""?
      (<img src={loader} alt='loading'/>)
      :
      (<div className="App quote-container">
          <div className={this.state.longQuoteClass}>
            <i>
            <FontAwesome className='fas fa-quote-right' name='quote-right' size='5x'
              style={{fontSize:'3.5rem',marginRight:'.75rem'}} />
            </i>
            <span> 
            {this.state.quoteText}
            </span>
          </div>
          <div className="quote-author">
            <span>
              {this.state.quoteAuthor}
            </span>
          </div>
          <div className="button-container">
            <button className="twitter-button" onClick={this.tweetQuote}>
              <FontAwesome className='fab fa-twitter' name='twitter' size='2x'
                style={{fontSize:'1.70rem'}} />
            </button>
            <button id="new-quote" onClick={this.fetchQuote}>New Quote</button>
          </div>
        </div>)
    );
  }
  }
  

export default App;
