import React, { Component } from 'react';
import './StarWars.css';

// character class using state and props
class Character extends Component {
    constructor(props){
        super(props);
        this.state = {
            info: '',
        }
    };
    // pulling imgage for cards
    componentDidMount(){
        this.getImage(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/id/${this.props.character.url.match( /\d+/ )[0]}.json`)
    }

    getImage = URL => {
        fetch(URL)
            .then(res => {
            return res.json();
            })
            .then(data => {
            this.setState({ info: data });
            })
            .catch(err => {
            throw new Error(err);
            });
    }

    render(){

        const inlineStyle = {
            background: `url(${this.state.info.image}) no-repeat`
        }

        return (
            <div className="character">
                <div className="character-img" 
                style={inlineStyle}>

                </div>
                {/* using character info via props and adding it to the right of the card */}
                <div className="character-box">
                        <div className="character-name">
                            <h2>{this.props.character.name}</h2>
                        </div>
                        <div className="character-legend">
                            <div className="left">
                                <h3>Eye Color:</h3>
                                <h3>BirthYear: </h3>
                                <h3>Height:</h3>
                                <h3>Skin Color:</h3>
                                <h3>Species</h3>
                            </div>
                            <div className="right">
                                <h3>{this.props.character.eye_color}</h3>
                                <h3>{this.props.character.birth_year}</h3>
                                <h3>{this.props.character.height}</h3>
                                <h3>{this.props.character.skin_color}</h3>
                                <h3>{this.state.info.species}</h3>
                            </div>
                        </div>
                </div>           
                

            </div>
        )
    }
}

export default Character;