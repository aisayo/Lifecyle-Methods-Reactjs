import React, { Component } from 'react';

import BrewsList from './BrewsList'

class Brews extends Component {

    componentWillUnmount(){
        alert('Not thirsty ehhhh?')
    }

    render() {

        const { brews } = this.props

        return (
            <div>
                {brews.map(brew => <BrewsList key={brew.id} brew={brew} />)}
            </div>
        );
    }
}

export default Brews