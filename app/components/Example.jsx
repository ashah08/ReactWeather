var React = require('react');

//stateless component
var Example = (props) =>{
  return(
    <h3>Example Component</h3>
  );
}

module.exports = Example;

//other Method
/*var Example = React.createClass({
  render:function(){
    return(
      <h3>Example Component</h3>
    );
  }
});*/
