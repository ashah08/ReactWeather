var React = require('react');

//stateless component
var About = (props) => {
  return(
    <h3>About New Component</h3>
  );
}

module.exports = About;

//other Method
/*var About = React.createClass({
  render:function(){
    return(
      <h3>About Component</h3>
    );
  }
}); */
