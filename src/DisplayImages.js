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
import storyView2 from './images/StoryView2.png';
import wall from './images/wall.png';
import watchPage from './images/watchPage.png';
import watchPage2 from './images/watchPage2.png';
import writingPost from './images/writingPost.png';

const images = [
    {
        caption: "Murderbook Wall Page",
        alt: "Murderbook Wall Page image",
        source: {
            regular: wall
        }
    },
    {
        caption: "Post Comments",
        alt: "Murderbook Post Comments view",
        source: {
            regular: postComments
        }
    },
    {
        caption: "Post Writting Comments",
        alt: "Murderbook Post Writting Comments view",
        source: {
            regular: postWrittingComment
        }
    },
    {
        caption: "Sharing Post",
        alt: "Murderbook Sharing Post view",
        source: {
            regular: sharingPost
        }
    },
    {
        caption: "Post Kabob Menu",
        alt: "Murderbook Post Kabob Menu view",
        source: {
            regular: postKabobMenu
        }
    },
    {
        caption: "Recommended Friends",
        alt: "Murderbook Recommended Friends view",
        source: {
            regular: recommendedFriends
        }
    },
    {
        caption: "Freind Requests",
        alt: "Murderbook Freind Requests view",
        source: {
            regular: friendRequests
        }
    },
    {
        caption: "People You May Know",
        alt: "Murderbook People You May Know view",
        source: {
            regular: peopleYouMayKnow
        }
    },
    {
        caption: "Story View",
        alt: "Murderbook Story view",
        source: {
            regular: storyView
        }
    },
    {
        caption: "Additional Story View",
        alt: "Murderbook Additional Story view",
        source: {
            regular: storyView2
        }
    },
    {
        caption: "Watch Page",
        alt: "Murderbook Watch Page image",
        source: {
            regular: watchPage
        }
    },
    {
        caption: "Additional Watch Page View",
        alt: "Murderbook Additional Watch Page view",
        source: {
            regular: watchPage2
        }
    },
    {
        caption: "Groups Page",
        alt: "Murderbook Groups Page view",
        source: {
            regular: groupsPage
        }
    },
    {
        caption: "Profile Page",
        alt: "Murderbook Profile Page view",
        source: {
            regular: profilePage
        }
    },
    {
        caption: "Additional Profile Page View 1",
        alt: "Murderbook Additional Profile Page View 1",
        source: {
            regular: profilePage2
        }
    },
    {
        caption: "Additional Profile Page View 2",
        alt: "Murderbook Additional Profile Page View 2",
        source: {
            regular: profilePage3
        }
    },
    {
        caption: "Additional Profile Page View 3",
        alt: "Murderbook Additional Profile Page View 3",
        source: {
            regular: profilePage4
        }
    },
    {
        caption: "Friend Profile",
        alt: "Murderbook Friend Profile view",
        source: {
            regular: friendProfile
        }
    },
    {
        caption: "Notifications",
        alt: "Murderbook Notifications view",
        source: {
            regular: notifications
        }
    },
    {
        caption: "Additional Notifications View",
        alt: "Murderbook Additional Notifications view",
        source: {
            regular: notifications2
        }
    },
    {
        caption: "Edit Profile Photo",
        alt: "Murderbook Edit Profile Photo view",
        source: {
            regular: editProfilePhoto
        }
    },
    {
        caption: "Profile Settings",
        alt: "Murderbook Profile Settings view",
        source: {
            regular: profileSettings
        }
    },
    {
        caption: "Writing Post",
        alt: "Murderbook Writing Post view",
        source: {
            regular: writingPost
        }
    },
    {
        caption: "Hamburger Menu",
        alt: "Murderbook Hamburger Menu view",
        source: {
            regular: hamburgerMenu
        }
    },
];

class DisplayImages extends Component {
    render(){
        return <Carousel views={images}/>
    }
}

export default DisplayImages;