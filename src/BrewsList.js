import React from 'react';

import BrewCard from './BrewCard'

const BrewsList = (props) => {

    const { brews } = props

    return (
        <div>
            {brews.map(brew => <BrewCard brew={brew} />)}
        </div>
    );
};

export default BrewsList;