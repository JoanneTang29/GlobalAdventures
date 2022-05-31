const React = require('react');
const {
  myStyle,
  navStyle,
  navlink,
  styleTitle,
  styleNumber,
  styleImage,
  productContainer,
  companyName,
  buttonStyle,
  buttonDelete,
} = require('../../styles/productStyles');
class Show extends React.Component {
  render() {
    const { product } = this.props;
    const isOutOfStock = product.stock === 0;
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
          <div>
            {isOutOfStock ? (
              <p>Out of stock</p>
            ) : (
              <p style={styleNumber}>Stock: {product.stock}</p>
            )}
          </div>
          <p>{product.description}</p>
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
