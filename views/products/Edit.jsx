const React = require('react');
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
  formContainer,
} = require('../../styles/productStyles');
class Edit extends React.Component {
  render() {
    const product = this.props;
    // console.log('this edit product', product);
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
        <div style={formContainer}>
          <h1>Edit</h1>
          <form action={`/products/${product._id}/?_method=PUT`} method="POST">
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="product[title]"
                defaultValue={product.title}
              />
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="product[location]"
                defaultValue={product.location}
              />
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <input
                type="text"
                id="image"
                name="product[image]"
                defaultValue={product.image}
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="product[price]"
                defaultValue={product.price}
              />
            </div>
            <div>
              <label htmlFor="stock">Stock</label>
              <input
                type="number"
                id="stock"
                name="product[stock]"
                defaultValue={product.stock}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                id="description"
                name="product[description]"
              >
                {product.description}
              </textarea>
            </div>
            <button style={buttonStyle} type="submit">
              Update Product
            </button>
          </form>
          <a href={`/products/${product._id}`}>Back To Product</a>
        </div>
      </div>
    );
  }
}

module.exports = Edit;
