var React = require('react');

//stateless component
var Example = (props) =>{
  return(
    <div>
      <h3>Examples</h3>
      <p>Please see the examples below</p>
    </div>
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
