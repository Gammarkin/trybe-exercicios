import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import About from './components/About';
import NotFound from './components/NotFound';
import { Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
<Switch>
  <Route exact path="/" render={() => <Pokedex pokemons={pokemons} />} />
  <Route exact path="/pokemon/:name" render={({ match }) => {
    const { name } = match.params;
    const pokemon = pokemons.find(pokemon => pokemon.name === name);
    if (!pokemon) return <NotFound />;
    return <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} alt={`${pokemon.name} sprite`} />
      <p>{pokemon.type}</p>
      <p>{`${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}</p>
      <p>{pokemon.summary}</p>
     <div className='maps'>
      {pokemon.foundAt.map((e,i)=> (<div key={i}>
      <p>{e.location}</p>
      <img src={e.map} alt={e.name} />
      </div>)
      )}
      </div>
      <a  rel="noopener noreferrer" target="_blank" href={pokemon.moreInfo}>More info</a>
      <br/>
      <Link to="/">Back to Pokedex</Link>
    </div>
  }} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
  </Switch> 
   </div>
  );
}

export default App;