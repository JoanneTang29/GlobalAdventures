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
    const {products} = this.props;
    return(
        <div style={myStyle}>
            <h1>This is the edit page</h1>
            <h1>Edit Campground</h1>
<form action="/campgrounds/<%=campground._id%>?_method=PUT" method="post">
  <div>
    <label for="title">Title</label>
    <input
      type="text"
      id="title"
      name="campground[title]"
      value="<%=campground.title%>"
    />
  </div>
  <div>
    <label for="location">Location</label>
    <input
      type="text"
      id="location"
      name="campground[location]"
      value="<%=campground.location%>"
    />
  </div>
  <button>Update Products</button>
</form>
<a href="/products/:id">Back To Products</a>
        </div>
    )
    }
};


module.exports = Edit;