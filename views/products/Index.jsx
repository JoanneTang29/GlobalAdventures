const nodemon = require('nodemon');
const React = require('react');
const adventures = require('../../seed/adventures');
const seedIndex = require('../../seed/index');
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

class Index extends React.Component {
  render() {
    const { products } = this.props;
    // console.log('products index jsx', products);
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
        <h1></h1>
        <ul style={styleUl}>
          {products.map((products, i) => {
            return (
              <div style={productContainer}>
                <li>
                  <img style={styleImage} src={products.image}></img>
                </li>
                <li>
                  <span style={styleTitle}>
                    {products.title} in {products.location}
                  </span>
                </li>
                <li>
                  <span style={styleNumber}>Price: ${products.price}</span>
                </li>
                <li>
                  <span style={styleDescription}>{products.description}</span>
                </li>
                <li>
                  <button style={buttonStyle}>
                    <a href={`/products/${products._id}`} style={viewLink}>
                      View Trip
                    </a>
                  </button>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
