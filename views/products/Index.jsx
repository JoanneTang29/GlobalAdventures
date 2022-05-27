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

const fontSize = {
    fontSize: '40px'
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
                    <li><span style={fontSize}>{products.title}</span></li>
                    <li>{products.location}</li>
                    <li><img src={products.image}></img></li>
                    <li>{products.price}</li>
                    <li>{products.stock}</li>
                    <li>{products.description}</li>
                    </div>
                )
            })}</ul>
        </div>
    )
    }
};

module.exports = Index;