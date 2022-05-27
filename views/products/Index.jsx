const React = require('react');
const adventures = require('../../seed/adventures');
const seedIndex = require('../../seed/index');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#e76f51',
  };

const linkStyle = {
    display: 'none'
};

const navStyle = {
    backgroundColor: 'black',
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

class Index extends React.Component{
   render(){
    const {products} = this.props;
    console.log('products index jsx', products);
    return(
        <div style={myStyle}>
            <nav style={navStyle}>
                <div>
                    <a href="#">Global Adventure</a>
                    <div>
                    <a href="/products">Products</a>
                    <a href="/products/new">New Products</a>
                    </div>
                </div>
            </nav>
            <h1>This is the index page</h1>
            <ul>{products.map((products, i) => {
                return(
                    <div>
                    <li><span style={styleTitle}>{products.title}</span></li>
                    <li><span style={styleLocation}>{products.location}</span></li>
                    <li><img src={products.image}></img></li>
                    <li><span style={styleNumber}>Price: {products.price}</span></li>
                    <li><span style={styleNumber}>Stock: {products.stock}</span></li>
                    <li><span style={styleDescription}>{products.description}</span></li>
                    </div>
                )
            })}</ul>
        </div>
    )
    }
};

module.exports = Index;