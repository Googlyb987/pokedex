import React, { Component } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

export default class PokemonList extends Component {
    state= { 
        pokemon: []
    };

async componentDidMount() {
    this.fetchResults()
}
    
    fetchResults = async () => {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset="+ this.state.pokemon.length +"&limit=50");
    this.setState({pokemon: this.state.pokemon.concat(res.data['results'])});
    } 

    render() {
        return (
            <React.Fragment>
                {this.state.pokemon ? (
                    <div>
                    <div className="row">
                        {this.state.pokemon.map(pokemon => (
                            <PokemonCard 
                                key={pokemon.name}
                                name={pokemon.name}
                                url={pokemon.url}
                            />
                        ))}
                    </div>
                    {this.state.pokemon.length < 807 ? <div className="button"><button type="button" onClick={this.fetchResults} className="loadmorebutton">
                        Load more Pokemon
                    </button></div> : null}
                    </div>
                ) : (
                    <h1> Loading Pokemon</h1>
                )}
            </React.Fragment>
        );
    }
}
