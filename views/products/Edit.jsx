const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#e76f51',
  };

const linkStyle = {
    color: '#bde0fe',
    fontSize: '15pt',
};
class Edit extends React.Component{
   render(){
    const product = this.props;
    console.log('this edit product', product);
    return(
        <div style={myStyle}>
            <h1>This is the edit page</h1>
            <h1>Edit Product</h1>
              <form action={`/products/${product._id}/?_method=PUT"`} method="post">
                <div>
                  <label for="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    name={product.title}
                    value={product.title}
                  />
                </div>
                <div>
                  <label for="location">Location</label>
                  <input
                    type="text"
                    id="location"
                    name={product.location}
                    value={product.location}
                  />
                </div>
                <button>Update Product</button>
              </form>
              <a href={`../${product._id}`}>Back To Product</a>
        </div>
    )
    }
};


module.exports = Edit;