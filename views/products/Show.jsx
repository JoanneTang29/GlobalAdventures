const React = require('react');
const Nav = require('./../components/Nav');
const {
  myStyle,
  styleTitle,
  styleNumber,
  styleImage,
  styleDescription,
  productContainer,
  buttonStyle,
  buttonDelete,
} = require('../../styles/productStyles');

class Show extends React.Component {
  render() {
    const { product } = this.props;
    const isOutOfStock = product.stock === 0 || product.stock === null;
    // console.log('product', product);
    return (
      <div style={myStyle}>
        <Nav />
        <div style={productContainer}>
          <p style={styleTitle}>
            {product.title} in {product.location}
          </p>
          <img style={styleImage} src={product.image}></img>
          <p style={styleNumber}>Price: ${product.price}</p>
          <div>
            {isOutOfStock ? (
              <p>Out of stock</p>
            ) : (
              <p style={styleNumber}>{product.stock} spots remaining</p>
            )}
          </div>
          <p style={styleDescription}>{product.description}</p>
          {/* <Calendar /> */}
          <div>
            {isOutOfStock ? null : <button style={buttonStyle}>BUY</button>}
          </div>
          <p>
            <a href={`/products/${product._id}/edit`}>Edit this Trip</a>
          </p>
          <p>
            <form
              action={`/products/${product._id}?_method=DELETE`}
              method="POST"
            >
              <button type="submit" style={buttonDelete}>
                DELETE
              </button>
            </form>
          </p>
          <a href="../products">BACK</a>
        </div>
      </div>
    );
  }
}

module.exports = Show;
