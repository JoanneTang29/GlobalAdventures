const React = require('react');
const {
  navStyle,
  navlink,
  companyName,
  globeLogo,
} = require('./../../styles/productStyles');

class Nav extends React.Component {
  render() {
    return (
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
    );
  }
}

module.exports = Nav;
