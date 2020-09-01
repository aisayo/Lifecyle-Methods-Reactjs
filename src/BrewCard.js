import React from 'react';

import { Card } from 'react-bootstrap'

const BrewCard = (props) => {

    const { brew } = props
    return (
        <Card style={cardStyle}>
            <Card.Body>
            <Card.Title>{brew.name}</Card.Title>
            <Card.Text>Type:{brew.brewery_type}</Card.Text>
            <Card.Text>{brew.phone}</Card.Text>
            <Card.Link href={brew.website_url} target="_blank">{brew.website_url}</Card.Link>
            </Card.Body>
            
        </Card>
    );
};

const cardStyle = {
    border: 'solid',
    marginBottom: 25,
    paddingTop: 25,
    paddingBottom: 25,
}

export default BrewCard;