import React, { Component } from 'react';
import './App.css';

const newQuote = () => {
  let quotes = [
    {'quote': 'I love you the more in that I believe you had liked me for my own sake and for nothing else.', 'author': 'John Keats'},
    {'quote': 'But man is not made for defeat. A man can be destroyed but not defeated.', 'author': 'Ernest Hemingway'},
    {'quote': 'When you reach the end of your rope, tie a knot in it and hang on.', 'author':'Franklin D. Roosevelt'},
    {'quote': 'There is nothing permanent except change.', 'author': 'Heraclitus'},
    {'quote': 'You cannot shake hands with a clenched fist.', 'author': 'Indira Gandhi'},
    {'quote': 'Find a place inside where there\'s joy, and the joy will burn out the pain.','author':'Joseph Campbell'},
    {'quote':'Try to be a rainbow in someone\'s cloud.', 'author': 'Maya Angelou'},
    {'quote':'It is during our darkest moments that we must focus to see the light.', 'author': 'Aristotle'},
    {'quote':'Keep love in your heart. A life without it is like a sunless garden when the flowers are dead.', 'author': 'Oscar Wilde'},
    {'quote': 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.', 'author': 'Helen Keller'}
  ];
  let index = Math.floor(Math.random() * quotes.length);
  return {"quote": quotes[index].quote, "author": quotes[index].author};
}

class RQM extends Component {
  constructor(props) {
    super(props);
    let firstQuote = newQuote();
    this.state = {
      quote: firstQuote.quote,
      author: firstQuote.author
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    let tempQuote = newQuote();
    this.setState({quote: tempQuote.quote, author: tempQuote.author});
  }
  render() {
    return (
      <div>
        <span class="fa fa-quote-left"></span><span id="text"> {this.state.quote} </span><span class="fa fa-quote-right"></span>
        <p id="author">{this.state.author}</p>
        <div className="row">
          <a id="tweet-quote" href="https://twitter.com/intent/tweet"><i className="fab fa-twitter"></i> Tweet this quote</a>
          <button id="new-quote" onClick={this.handleClick}><i className="fa fa-angle-double-right"></i> Display a new quote</button>
        </div>
      </div>
    )
  }
};

export default RQM;
