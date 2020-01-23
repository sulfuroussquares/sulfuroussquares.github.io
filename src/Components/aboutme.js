import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';


class Aboutme extends Component {
    render() {
        return (
        <div className='aboutme-box' style={{width:"100%", margin:'auto'}}>
            <Grid className="landing-grid">
                    <Cell col={12}></Cell>
                    <Cell col={12}>
                        <div className="banner-text"> 
                        <h1>About Me </h1>
                        <hr/>
                        <p style={{whiteSpace: 'pre-wrap'}}> I am passionate about solving problems using technology. </p>  
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Aboutme;