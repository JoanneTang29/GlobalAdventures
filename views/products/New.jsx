const React = require('react');
const Nav = require('./../components/Nav');
const {
  myStyle,
  buttonStyle,
  formContainer,
  textareaStyle,
  inputStyle,
} = require('../../styles/productStyles');
class New extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div style={myStyle}>
        <Nav />
        <div style={formContainer}>
          <h1>Add Trip</h1>
          <form action={'/products'} method="POST">
            <div>
              <label htmlFor="title">Title</label>
              <br></br>
              <input style={inputStyle} type="text" name="product[title]" />
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <br></br>
              <input style={inputStyle} type="text" name="product[location]" />
            </div>
            <div>
              <label htmlFor="image">Image Url</label>
              <br></br>
              <input style={inputStyle} type="text" name="product[image]" />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <br></br>
              <input
                style={inputStyle}
                type="number"
                placeholder="0.00"
                name="product[price]"
              />
            </div>
            <div>
              <label htmlFor="stock">Stock</label>
              <br></br>
              <input
                style={inputStyle}
                type="number"
                placeholder="0"
                name="product[stock]"
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <br></br>
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
