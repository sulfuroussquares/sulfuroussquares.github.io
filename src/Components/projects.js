import React, {Component} from 'react';
import { Tabs, Tab , Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText} from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories(){

        if(this.state.activeTab===0) {
            return (

                <div className='projects-grid'>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '20em', background: 'url(/logreg2.png) center / cover'}}> </CardTitle>
                <CardText>
                    Logistic Regression classification applied to crime data.
                </CardText>
                <CardActions border>
                    <div class='center-align'>
                    <Button colored href='https://github.com/sulfuroussquares'>GitHub</Button>
                    </div>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                </CardMenu>
                </Card>

                </div>
            )
        }
        else if(this.state.activeTab===1){
            return(
                <div className='projects-grid'>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '20em', background: 'url(/comingsoon.png) center / cover'}}> </CardTitle>
                <CardText>
                    Coming Soon
                </CardText>
                <CardActions border>
                    <div class='center-align'>
                    <Button colored href='https://github.com/sulfuroussquares'>GitHub</Button>
                    </div>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                </CardMenu>
                </Card>

                </div>
            )
        }

    }
    

    render() {
        return (
           <div>
            <div className="category-tabs"> 
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple > 
                <Tab>Data Science</Tab>
                <Tab>Software Engineering</Tab>
                </Tabs>

                <Grid>
                <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
                </Cell>
                </Grid>
                    
                
            </div>
            </div>
        )
    }
}

export default Projects;