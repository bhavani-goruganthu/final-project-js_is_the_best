import React from 'react'
import {Card} from 'react-bootstrap';

const SingleListing = {
    img: 'https://imgur.com/a/enrEWvh',
    title: 'Static Listing',
    price: '$6.99',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat imperdiet dui, sit amet dignissim augue pulvinar a. Sed sodales arcu in velit elementum, eu imperdiet eros venenatis. Curabitur non tortor imperdiet, fringilla arcu eu, scelerisque magna. Sed aliquet dolor turpis. Vestibulum mollis id velit luctus semper. Cras non molestie sapien, at fermentum sapien. Sed euismod mattis arcu ac fermentum. Cras a molestie sapien. Sed vulputate nisi interdum pellentesque varius. Suspendisse vel arcu faucibus, vulputate ante vitae, vulputate quam. Integer molestie volutpat sem, vel posuere tortor facilisis eget. Duis in vehicula lacus.sProin vitae diam porta, facilisis nisi a, pulvinar mi. Quisque ullamcorper vulputate justo, et feugiat arcu vestibulum sit amet. Aliquam varius, erat ac mollis imperdiet, purus mauris pharetra arcu, a aliquet eros elit iaculis ante. Maecenas laoreet, nibh quis sodales fringilla, magna dolor facilisis arcu, et laoreet erat ligula eget orci. Praesent viverra pellentesque erat ac lacinia. Morbi gravida metus nec placerat pellentesque. Nulla a velit eget quam facilisis scelerisque. Nulla ac risus lorem.',
}

const ListingCard = () => {
    return(
        <div class='ListingCard'>
            <Card>
                <Card.Header as="h5">{SingleListing.title}</Card.Header>
                <Card.Body>
                <img src={SingleListing.img} style={{float: 'left', display: 'flex'}}/>
                    <Card.Title>{SingleListing.price}</Card.Title>
                    <Card.Text>
                        {SingleListing.description}
                    </Card.Text>
                </Card.Body>
                </Card>
        </div>
    );
}

export default ListingCard