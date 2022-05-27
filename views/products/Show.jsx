const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#e63946',
};

const linkStyle = {
    fontSize: '15pt'
};

const styleImage = {
    width: '540px',
    height: 'auto',
}

class Show extends React.Component{
   render(){
    const {product} = this.props;
    console.log('product', product)
    return(
        <div style={myStyle}>
            <h1>Product Page</h1>
            <p>{product.title}</p>
            <p>{product.location}</p>
            <img style={styleImage} src={product.image}></img>
            <p>Price per person: {product.price}</p>
            <p>Stock: {product.stock}</p>
            <p>{product.description}</p>
            <p><a href={`/products/${product._id}/edit`}>Edit</a></p>
            <p>
            <form action={`/products/${product._id}?_method=DELETE" method="POST"`}><button>DELETE</button></form>
            </p>
            <br></br>
            <a href="../products" style={linkStyle}>BACK</a>
        </div>
    )
    }
};

module.exports = Show;