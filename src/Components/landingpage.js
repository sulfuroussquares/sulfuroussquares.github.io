import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div style={{width:"100%", margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                        src="/me_cropped.png"
                        alt="avatar"
                        className="avatar-image"
                        />

                        <div className="banner-text"> 
                        <h1>brian betancourt </h1>
                        <hr/>
                        
                        {/* <div className="mini-icons">
                            <i className="fa fa-code" aria-hidden="true"></i>  
                                 
                            <i class="fa fa-flask" aria-hidden="true"></i>
                        </div> */}

                        <p>Software Engineering <i className="fa fa-code" aria-hidden="true"></i>  | Data Science  <i class="fa fa-flask" aria-hidden="true"></i></p> 
                        <div className="social-links">
                            {/* linkedin */}
                            <a href="https://www.linkedin.com/in/bibetancourt/" target="_blank" rel ="noopener noreferrer" >
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>
                            {/* github */}
                            <a href="https://github.com/sulfuroussquares" target="_blank" rel ="noopener noreferrer" >
                                <i className="fa fa-github" aria-hidden="true" />
                            </a>
                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
            
            
        )
    }
}

export default LandingPage;