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
class New extends React.Component {
  render() {
    const { products } = this.props;
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
          <h1>Add Trip</h1>
          <form action={'/products'} method="POST">
            <div>
              <label htmlFor="title">Title</label>
              <input style={inputStyle} type="text" name="product[title]" />
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <input style={inputStyle} type="text" name="product[location]" />
            </div>
            <div>
              <label htmlFor="image">Image Url</label>
              <input style={inputStyle} type="text" name="product[image]" />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                style={inputStyle}
                type="number"
                placeholder="0.00"
                name="product[price]"
              />
            </div>
            <div>
              <label htmlFor="stock">Stock</label>
              <input
                style={inputStyle}
                type="number"
                placeholder="0"
                name="product[stock]"
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                style={textareaStyle}
                type="text"
                name="product[description]"
              ></textarea>
            </div>
            <div>
              <button style={buttonStyle} type="submit">
                Add Trip
              </button>
            </div>
          </form>
          <a href={'/products'}>All Trips</a>
        </div>
      </div>
    );
  }
}

module.exports = New;
