const React = require('react');
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
const Products = require('../../models/products');

class Home extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div style={myStyle}>
        <ul>
          {products.map((products, i) => {
            return (
              <div>
                <li>
                  <img src={products.image}></img>
                </li>
              </div>
            );
          })}
        </ul>
        <div>
          <button>
            <a href={'/products'}>Are you a traveler?</a>
          </button>
          <p>OR</p>
          <button>Are you a travel agent?</button>
        </div>
      </div>
    );
  }
}

module.exports = Home;
