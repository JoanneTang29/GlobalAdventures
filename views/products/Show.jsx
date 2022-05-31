const React = require('react');
const Button = require('react-bootstrap/Button');
const {
  myStyle,
  navStyle,
  navlink,
  styleUl,
  styleTitle,
  styleNumber,
  styleDescription,
  styleImage,
  viewLink,
  productContainer,
  companyName,
  buttonStyle,
} = require('../../styles/productStyles');
class Show extends React.Component {
  render() {
    const { product } = this.props;
    console.log('product', product);
    return (
      <div style={myStyle}>
        <nav style={navStyle}>
          <div>
            <span style={companyName}>Global Adventures</span>
            <a style={navlink} href="/products">
              Trips
            </a>
            <a style={navlink} href="/products/new">
              Add Trip
            </a>
          </div>
        </nav>
        <div style={productContainer}>
          <p style={styleTitle}>
            {product.title} in {product.location}
          </p>
          <img style={styleImage} src={product.image}></img>
          <p style={styleNumber}>Price: ${product.price}</p>
          <p style={styleNumber}>Stock: {product.stock}</p>
          <p>{product.description}</p>
          <p>
            <a href={`/products/${product._id}/edit`}>EDIT</a>
          </p>
          <p>
            <form
              action={`/products/${product._id}?_method=DELETE`}
              method="POST"
            >
              <button type="submit">DELETE</button>
            </form>
          </p>
          <a href="../products">BACK</a>
        </div>
      </div>
    );
  }
}

module.exports = Show;
