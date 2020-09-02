import React from 'react';

import BrewCard from './BrewCard'

const BrewsList = (props) => {

    const { brews } = props

    return (
        <div>
            {brews.map(brew => <BrewCard key={brew.id} brew={brew} />)}
        </div>
    );
};

export default BrewsList;