import React, {Component} from 'react';

class About extends Component{

    render()
    {
        return (
            <div style={{marginTop: "75px"}}>
                <p>Murderbook is a social media website for murder mystery 
                    enthusiasts to converse and share their favorite unsolved 
                    and solved murders. The inspiration came from wanting an app 
                    similar to facebook with the focus centered around murder 
                    mysteries. Allowing users to share and interact with other 
                    user’s favorite murder stories.
                </p>
                <h2>Main Features:</h2>
                <h3>Home – Wall</h3>
	            <h5>Post</h5>
            	<h6>Kabob Menu feature</h6>
            	<h6>Text and Image</h6>
            	<h6>View Comments</h6>                      	
                <h6>Share Menu Feature</h6>
                <h5>Stories</h5> 
                <h6>View</h6>
                <h6>Already viewed</h6>
                <h5>Recommended Friends on the wall</h5>
                <h6>Hide recommended friends</h6>
                <h6>See all recommendations</h6>
                <h6>Friend request page</h6>
                <h3>Groups</h3>
                <h5>View Groups</h5>
                <h5>Search Menu Feature</h5>
                <h5>My Groups</h5>
                <h5>Group Post</h5>
                <h6>Similar to a Post</h6>
                <h3>Watch</h3>
                <h5>Search Menu Feature</h5>
                <h5>Your View List</h5>
                <h5>Group Posts</h5>
                <h6>Similar to Post</h6>
                <h3>Profile</h3>
                <h5>Edit Picture menu</h5>
                <h5>Profile Setting Menu</h5>
                <h5>Edit Public Info Menu</h5>
                <h5>View All Friends page</h5>
                <h6>View Friends profile by clicking on Profile Image</h6>
                <h5>Open the Add Post menu</h5>
                <h6>Themes</h6>
                <h6>Sub Menu</h6>
                <h5>User’s Post</h5>
                <h5>Ability to view other friends profile pages by clicking on Profile Image</h5> 
                <h3>Notifications</h3>
                <h5>New and Seen</h5>
                <h5>Recommend Friends</h5>
                <h5>Older Notifications</h5>
                <h5>Notification redirect</h5>
                <h5>Kabob Menu feature</h5>
                <h3>Hamburger menu</h3>
                <h5>Settings Menu</h5>
                <h5>Redirects for Groups, Friends</h5>              
                <h2>Additional Features:</h2>        
                <h3>Jester features</h3>
                <h5>Swipe Left and right to switch pages</h5>
                <h3>Facebook mock design with Murderbook Color Scheme</h3>
                <h3>Murderbook logo on splash screen</h3>
                <h3>Murderbook Social Media Activity</h3>
                <h2>Challenges:</h2>
                <p>The hardest challenges were translating the idea of the murderbook 
                    website in React into a react native application. Using help from 
                    facebook templates I was able to construct the Murderbook application 
                    in react native. Understanding how to structure the components and the 
                    navigation between pages was the most difficult.  The nucampsite project 
                    had examples that help determine how to solve these issues. Finding ways to
                    make the functionality more like a well-built application in react native was
                    also hard. Research done on the internet allowed me to see how other projects
                    achieved this and then I was able to implement these solutions into my project.
                </p>
            </div>
        );
    }
}

export default About;