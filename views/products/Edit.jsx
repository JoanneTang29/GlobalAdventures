const React = require('react');
const {
  myStyle,
  navStyle,
  navlink,
  companyName,
  buttonStyle,
  formContainer,
  textareaStyle,
  inputStyle,
  globeLogo,
} = require('../../styles/productStyles');
class Edit extends React.Component {
  render() {
    const product = this.props;
    // console.log('this edit product', product);
    return (
      <div style={myStyle}>
        <nav style={navStyle}>
          <div>
            <span style={companyName}>
              {' '}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTor262ZF8H31DsUgrs_cZBkFa1vkklpM3J6A&usqp=CAU"
                alt=""
                style={globeLogo}
              />
              Global Adventures
            </span>
            <a style={navlink} href="/products">
              Trips
            </a>
            <a style={navlink} href="/products/new">
              Add Trip
            </a>
          </div>
        </nav>
        <div style={formContainer}>
          <h1>Edit Trip</h1>
          <form action={`/products/${product._id}/?_method=PUT`} method="POST">
            <div>
              <label htmlFor="title">Title</label>
              <input
                style={inputStyle}
                type="text"
                name="product[title]"
                defaultValue={product.title}
              />
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <input
                style={inputStyle}
                type="text"
                name="product[location]"
                defaultValue={product.location}
              />
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <input
                style={inputStyle}
                type="text"
                name="product[image]"
                defaultValue={product.image}
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                style={inputStyle}
                type="number"
                name="product[price]"
                defaultValue={product.price}
              />
            </div>
            <div>
              <label htmlFor="stock">Stock</label>
              <input
                style={inputStyle}
                type="number"
                name="product[stock]"
                defaultValue={product.stock}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
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
