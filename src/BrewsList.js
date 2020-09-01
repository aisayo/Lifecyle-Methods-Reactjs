import React from 'react';

import BrewCard from './BrewCard'

const BrewsList = (props) => {

    const { brew } = props

    return (
        <div>
            <BrewCard brew={brew} />
        </div>
    );
};

export default BrewsList;