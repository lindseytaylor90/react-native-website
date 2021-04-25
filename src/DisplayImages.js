import React, {Component} from 'react';
import Carousel from 'react-images';
import jop from './images/jop.jpg';

const images = [
    {
        source: jop 
    },
    {
        source: jop
    },
    {
        source: jop
    }
];

class DisplayImages extends Component {
    render(){
        return <Carousel views={images}/>
    }
}

export default DisplayImages;