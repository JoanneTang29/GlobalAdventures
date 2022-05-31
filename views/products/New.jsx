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
class New extends React.Component {
  render() {
    const { products } = this.props;
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
          <h1>Add Trip</h1>
          <form action={'/products'} method="POST">
            <div>
              <label className="form-label" htmlFor="title">
                Title
              </label>
              <input
                className="form-control"
                type="text"
                id="title"
                name="product[title]"
              />
            </div>
            <div>
              <label className="form-label" htmlFor="location">
                Location
              </label>
              <input
                className="form-control"
                type="text"
                id="location"
                name="product[location]"
              />
            </div>
            <div>
              <label className="form-label" htmlFor="image">
                Image Url
              </label>
              <input
                className="form-control"
                type="text"
                id="image"
                name="product[image]"
              />
            </div>
            <div>
              <label className="form-label" htmlFor="price">
                Trip Price
              </label>
              <div>
                <span>$</span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="0.00"
                  name="product[price]"
                />
              </div>
            </div>
            <div>
              <label className="form-label" htmlFor="price">
                Stock
              </label>
              <div>
                <input
                  type="number"
                  className="form-control"
                  placeholder="0"
                  name="product[stock]"
                />
              </div>
            </div>
            <div>
              <label className="form-label" htmlFor="description">
                Description
              </label>
              <textarea
                className="form-control"
                type="text"
                id="description"
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
