import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

class Image extends Component {
    state = {
      pic: 'http://joemiller.us/wp-content/uploads/the-obamas-potus-2.jpg'
    }
    render() {
        const style = {
            backgroundColor: 'black',
            '@media (min-width: 481px) and (max-width: 600px)': {
              padding: '30px',
              '.img-obama': {
                width: '300px',
                height: '100px',
              }
            }
        }
      return (
        <div className='Picture' style={ style } >
          <img 
            src={this.state.pic} 
            className="img-obama"
            onMouseEnter={(props) => {
              this.setState({
                pic:  'https://peopledotcom.files.wordpress.com/2017/05/barack-obama3.jpg',
              })
            }}
  
            onMouseOut={(props) => {
              this.setState({
                pic: 'http://joemiller.us/wp-content/uploads/the-obamas-potus-2.jpg'
              })
            }}
          />
        </div>
      )
    }
  };

export default Radium(Image)