const nodemon = require('nodemon');
const React = require('react');
const adventures = require('../../seed/adventures');
const seedIndex = require('../../seed/index');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#e76f51',
    fontFamily: 'tahoma',
    padding: '2em'
  };

const linkStyle = {
    display: 'none'
};

const navStyle = {
    backgroundColor: 'yellow',
    fontSize: '20px',
    padding: '1em',
    wordSpacing: '10px',
}

const navlink = {
    textDecoration: 'none',
}

const styleUl = {
    listStyleType: 'none'
}

const styleTitle = {
    fontSize: '40px'
}

const styleLocation = {
    color: 'gray',
    fontSize: '30px'
}

const styleNumber = {
    color: 'green'
}

const styleDescription = {
    fontSize: '20px'
}

const styleImage = {
    width: '540px',
    height: 'auto',
}

class Index extends React.Component{
   render(){
    const {products} = this.props;
    // console.log('products index jsx', products);
    return(
        <div style={myStyle}>
            <nav style={navStyle}>
                <div >
                    <a style={navlink} href="#">Global Adventure</a>
                    <a style={navlink} href="/products">Trips</a>
                    <a style={navlink} href="/products/new">New Trips</a>
                </div>
            </nav>
            <h1>All Trips</h1>
            <ul style={styleUl}>{products.map((products, i) => {
                return(
                    <div>
                    <li><span style={styleTitle}>{products.title}</span></li>
                    <li><span style={styleLocation}>{products.location}</span></li>
                    <li><img style={styleImage} src={products.image}></img></li>
                    <li><span style={styleNumber}>Price: {products.price}</span></li>
                    {/* <li><span style={styleNumber}>Stock: {products.stock}</span></li> */}
                    <li><span style={styleDescription}>{products.description}</span></li>
                    <li><a href={`/products/${products._id}`}>View Trip</a></li>
                    </div>
                )
            })}</ul>
        </div>
    )
    }
};

module.exports = Index;