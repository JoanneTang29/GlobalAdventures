const React = require('react');
const Nav = require('./../components/Nav');
const {
  myStyle,
  buttonStyle,
  formContainer,
  textareaStyle,
  inputStyle,
} = require('../../styles/productStyles');
class Edit extends React.Component {
  render() {
    const product = this.props;
    // console.log('this edit product', product);
    return (
      <div style={myStyle}>
        <Nav />
        <div style={formContainer}>
          <h1>Edit Trip</h1>
          <form action={`/products/${product._id}/?_method=PUT`} method="POST">
            <div>
              <label htmlFor="title">Title</label>
              <br></br>
              <input
                style={inputStyle}
                type="text"
                name="product[title]"
                defaultValue={product.title}
              />
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <br></br>
              <input
                style={inputStyle}
                type="text"
                name="product[location]"
                defaultValue={product.location}
              />
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <br></br>
              <input
                style={inputStyle}
                type="text"
                name="product[image]"
                defaultValue={product.image}
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <br></br>
              <input
                style={inputStyle}
                type="number"
                name="product[price]"
                defaultValue={product.price}
              />
            </div>
            <div>
              <label htmlFor="stock">Stock</label>
              <br></br>
              <input
                style={inputStyle}
                type="number"
                name="product[stock]"
                defaultValue={product.stock}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <br></br>
              <textarea
                style={textareaStyle}
                type="text"
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
