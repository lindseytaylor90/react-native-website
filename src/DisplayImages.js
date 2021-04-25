import React, {Component} from 'react';
import Carousel from 'react-images';
import editProfilePhoto from './images/editProfilePhoto.png';
import friendProfile from './images/friendProfile.png';
import friendRequests from './images/friendRequests.png';
import groupsPage from './images/groupsPage.png';
import hamburgerMenu from './images/hamburgerMenu.png';
import notifications from './images/notifications.png';
import notifications2 from './images/notifications2.png';
import peopleYouMayKnow from './images/peopleYouMayKnow.png';
import postComments from './images/postComments.png';
import postKabobMenu from './images/postKabobMenu.png';
import postWrittingComment from './images/postWrittingComment.png';
import profilePage from './images/profilePage.png';
import profilePage2 from './images/profilePage2.png';
import profilePage3 from './images/profilePage3.png';
import profilePage4 from './images/profilePage4.png';
import profileSettings from './images/profileSettings.png';
import recommendedFriends from './images/recommendedFriends.png';
import sharingPost from './images/sharingPost.png';
import storyView from './images/storyView.png';
import storyView2 from './images/storyView2.png';
import wall from './images/wall.png';
import watchPage from './images/watchPage.png';
import watchPage2 from './images/watchPage2.png';
import writingPost from './images/writingPost.png';

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