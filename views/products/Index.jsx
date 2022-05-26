const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#e76f51',
  };

const linkStyle = {
    color: '#bde0fe',
    fontSize: '15pt',
};

class Index extends React.Component{
   render(){
    const {products} = this.props;
    return(
        <div style={myStyle}>
            <nav>This is a navbar</nav>
            <h1>This is the index page</h1>
        </div>
    )
    }
};


module.exports = Index;