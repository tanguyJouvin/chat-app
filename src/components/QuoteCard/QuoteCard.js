import React from 'react';
import './QuoteCard.css';

export default class QuoteCard extends React.Component{
  constructor(props){
    super(props);
    this.state ={
        favorite: false
    }
    console.log(this.props);
  }
  
  eventListener = (event) => {
    const newFavorite = !this.state.favorite;
    this.setState({
      favorite :  newFavorite
    })
  }

  render() {
    console.log(this.props); //-> permet de voir les datas récup du composant parent
    return(
      <div>
        <figure className="QuoteCard">
        <img src={this.props.image} alt={this.props.character}/>
        <figcaption>
          <blockquote>{this.props.quote}</blockquote>
          <p>
            <cite>{this.props.character}</cite>
            <span className={this.state.favorite ? "is-favorite" : ""} onClick ={this.eventListener}>&#9733;</span>
          </p>
          
        </figcaption>
        </figure>
      </div>
    );
  }
}