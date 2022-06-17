const React = require('react');
const adventures = require('../../seed/adventures');
const Nav = require('./../components/Nav');
const {
  myStyle,
  styleUl,
  styleTitle,
  styleNumber,
  styleImage,
  styleDescription,
  viewLink,
  productContainer,
  buttonStyle,
} = require('../../styles/productStyles');

class Index extends React.Component {
  render() {
    const { products } = this.props;
    // console.log('products index jsx', products);
    return (
      <div style={myStyle}>
        <Nav />
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
                  <p style={styleDescription}>{products.description}</p>
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
