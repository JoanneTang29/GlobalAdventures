const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#e63946',
};

const linkStyle = {
    fontSize: '15pt'
};

class Show extends React.Component{
   render(){
    const products = this.props.products;
    return(
        <div style={myStyle}>
            <h1>Products Page</h1>
            <br></br>
            <a href="../products" style={linkStyle}>BACK</a>
        </div>
    )
    }
};

module.exports = Show;