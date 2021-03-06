import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component { 
    render(){ 
        return(
            <div className="jumbotron">
                <h1>Pluralsight Administration!!</h1>
                <p>
                    React, Redux, and React Router combined with Browserify, Gulp, and Bootstrap. Build a React and Flux app from scratch using this starter kit on <a href="http://www.pluralsight.com/courses/react-flux-building-applications">Pluralsight</a>.
                </p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}

export default Home;