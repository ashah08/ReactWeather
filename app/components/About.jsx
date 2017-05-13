var React = require('react');

//stateless component
var About = (props) => {
  return(
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a Weather Application built on React.</p>
      <p>Here are the some of the tools I have used</p>
      <ul>
        <li><a href="https://facebook.github.io.react">React JS</a> - Javascript Framework</li>
        <li><a href="http://openweathermap.org">Open Weather Map</a> - Search Weather by city name</li>
        <li><a href="http://foundation.zurb.com/sites/docs/">Foundation</a> - Styling Framework</li>
      </ul>
    </div>
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
