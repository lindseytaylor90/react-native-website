import React, {Component} from 'react';
import  DisplayImages from './DisplayImages';

class Home extends Component{

    render()
    {

        return (
            <div style={{paddingTop: '60px'}}>
                <DisplayImages/>
            </div>
        );
    }
}

export default Home;