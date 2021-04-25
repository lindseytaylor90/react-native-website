import React, {Component} from 'react';

class About extends Component{

    render()
    {
        return (
            <div>
                <p>Murderbook is a social media website for murder mystery enthusiasts to converse and share their favorite unsolved and solved murders. The inspiration came from wanting an app similar to facebook with the focus centered around murder mysteries. Allowing users to share and interact with other user’s favorite murder stories.</p>
                <p>Main Features:

-	Home – Wall
o	Post
	Kabob Menu feature
	Text and Image
	View Comments
	Share Menu Feature
o	Stories 
	View 
	Already viewed
o	Recommended Friends on the wall
	Hide recommended friends
	See all recommendations
	Friend request page
-	Groups
o	View Groups
o	Search Menu Feature
o	My Groups
o	Group Post
	Similar to a Post
-	Watch
o	Search Menu Feature
o	Your View List
o	Group Posts
	Similar to Post
-	Profile
o	Edit Picture menu
o	Profile Setting Menu
o	Edit Public Info Menu
o	View All Friends page
	View Friends profile by clicking on Profile Image
o	Open the Add Post menu
	Themes
	Sub Menu
o	User’s Post
o	Ability to view other friends profile pages by clicking on Profile Image 
-	Notifications
o	New and Seen
o	Recommend Friends
o	Older Notifications
o	Notification redirect
o	Kabob Menu feature
-	Hamburger menu
o	Settings Menu
o	Redirects for Groups, Friends

Additional Features:

-	Jester features
o	Swipe Left and right to switch pages
-	Facebook mock design with Murderbook Color Scheme
-	Murderbook logo on splash screen
-	Murderbook Social Media Activity

Challenges:

The hardest challenges were translating the idea of the murderbook website in React into a react native application. Using help from facebook templates I was able to construct the Murderbook application in react native. Understanding how to structure the components and the navigation between pages was the most difficult.  The nucampsite project had examples that help determine how to solve these issues.

Finding ways to make the functionality more like a well-built application in react native was also hard. Research done on the internet allowed me to see how other projects achieved this and then I was able to implement these solutions into my project.
</p>
                <p>Quisque rhoncus blandit nisl, vel luctus lorem fermentum vitae. Vivamus vestibulum odio eu nulla imperdiet, at aliquet ante luctus. Nullam ornare elit tempor risus iaculis interdum. Curabitur dapibus nunc quis vestibulum ullamcorper. Etiam interdum ligula odio, ut mattis erat interdum id. Morbi pulvinar lacinia gravida. Maecenas mauris nibh, faucibus et turpis non, imperdiet maximus ex. Vestibulum suscipit egestas sem, sed ultrices lacus varius nec. Morbi fermentum dictum ante et tristique. Sed quis diam a felis pellentesque scelerisque.</p>
                <p>Curabitur consequat magna vel dolor gravida, eget mollis sapien pellentesque. Suspendisse tristique bibendum cursus. In hac habitasse platea dictumst. Fusce id ipsum viverra, efficitur erat et, sagittis nisi. Quisque congue suscipit urna in aliquam. Nulla sed eros felis. Suspendisse vulputate tristique arcu, sed euismod dui dignissim eu. Mauris facilisis nulla vel elementum tempus. Vestibulum nec lacus vel risus ultricies blandit. Mauris id nisi dictum, vulputate est a, maximus quam. Nullam maximus volutpat purus, eget ornare tortor faucibus ut. Mauris sed nibh auctor, interdum erat non, porta arcu. Aenean lorem massa, vestibulum vitae bibendum sed, vulputate sed lectus. Proin ut cursus dolor.</p>
            </div>
        );
    }
}

export default About;