import React, {Component} from 'react';
import './App.css';
// React-MDL
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './Components/main';
import { Link } from 'react-router-dom';
import background from './background.jpg';

class App extends Component {
  render() {
    return (
      // {/* Always shows Linkheader, even in smaller screens. */}
      // <div style={{height: '300px', position: 'relative'}}>
      
      <div className ="background">
      {/* <div className="demo-big-content"> */}
      <Layout fixedHeader>
        <Header transparent className="header-color" title={<span><span style={{ color: '#ddd' }}> </span><Link style={{textDecoration: 'none', color: 'white'}} to='/'><strong>Home</strong></Link></span>}>
            <Navigation>
                {/* <Link to="/resume">Resume</Link> */}
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                {/* <Link to="/contact">Contact</Link> */}
            </Navigation>
        </Header>
        <Drawer title="Portfolio">
            <Navigation>
                {/* <Link to="/resume">Resume</Link> */}
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                {/* <Link to="/contact">Contact</Link> */}
            </Navigation>
        </Drawer>
        <Content>
        <Main/>
        </Content>
      </Layout>
      </div>
        );
      }
    }
     
  

export default App;
