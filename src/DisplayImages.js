import React, {Component} from 'react';
import Carousel from 'react-images';
import jop from './images/jop.jpg';

const images = [
    {
        caption: "Murderbook Wall Page",
        alt: "Murderbook Wall Page image",
        source: {
            regular: "A URL to load a high quality image from"
        }
    },
    {
        caption: "Post Comments",
        alt: "Murderbook Post Comments view",
        source: {
            regular: "A URL to load a high quality image from"
        }
    },
    {
        caption: "Post Writting Comments",
        alt: "Murderbook Post Writting Comments view",
        source: {
            regular: "A URL to load a high quality image from"
        }
    },
    {
        caption: "Sharing Post",
        alt: "Murderbook Sharing Post view",
        source: {
            regular: "A URL to load a high quality image from"
        }
    },
    {
        caption: "Post Kabob Menu",
        alt: "Murderbook Post Kabob Menu view",
        source: {
            regular: "A URL to load a high quality image from"
        }
    },
    {
        caption: "Recommended Friends",
        alt: "Murderbook Recommended Friends view",
        source: {
            regular: "A URL to load a high quality image from"
        }
    },
    {
        caption: "Freind Requests",
        alt: "Murderbook Freind Requests view",
        source: {
            regular: "A URL to load a high quality image from"
        }
    },
    {
        caption: "People You May Know",
        alt: "Murderbook People You May Know view",
        source: {
            regular: "A URL to load a high quality image from"
        }
    },
    {
        caption: "Story View",
        alt: "Murderbook Story view",
        source: {
            regular: "A URL to load a high quality image from"
        }
    },
    {
        caption: "Additional Story View",
        alt: "Murderbook Additional Story view",
        source: {
            regular: "A URL to load a high quality image from"
        }
    },
];

class DisplayImages extends Component {
    render(){
        return <Carousel views={images}/>
    }
}

export default DisplayImages;