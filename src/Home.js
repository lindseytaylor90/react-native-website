import React, {Component} from 'react';
import  DisplayImages from './DisplayImages';

class Home extends Component{

    render()
    {

        return (
            <div>
                <p>Welcome to home page ! </p>
                <div style={{marginTop: "50px"}}>
                    <DisplayImages/>
                </div>
            </div>
        );
    }
}

export default Home;