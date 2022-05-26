const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#e76f51',
  };

class New extends React.Component{
   render(){
    const {products} = this.props;
    return(
        <div style={myStyle}>
            <h1>This is the new page</h1>
        </div>
    )
    }
};


module.exports = New;