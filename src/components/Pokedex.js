import React, { Component} from 'react'
import Axios from 'axios'

class Pokedex extends Component {
    constructor () {
        super ()
        this.state = {
            pokemonName: 'pikachu',
            imageUrl: ''

        }
    }

    componentDidMount() {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}`)
        .then((res) => {
            this.setState({
                imageUrl: res.data.sprites.other['official-artwork'].front_default
            })

        })

    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.pokemonName === '') {
            return
        }

        if (prevState.pokemonNName === this.state.pokemonName) {
            return
        }
        
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}`)
        .then((res) => {
            this.setState({
                imageUrl: res.data.sprites.other['official-artwork'].front_default
            })

        }).catch((err) => {
            this.setState({
                imageUrl: ''
            })
        })

    }

    render () {
        return (
            <div>
                <h1>My React Pokedex</h1>
                <input value={this.state.pokemonName} onChange={(e) => {this.setState({pokemonName: e.target.value.toLowerCase()})}} />
                <div>

                <img src={this.state.imageUrl} />
                </div>
            </div>
        )
    }
}

export default Pokedex