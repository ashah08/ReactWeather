var React = require('react');

//stateless component
var WeatherMessage = ({temp, location}) => {
  return (
      <h3 className="text-center">Current Weather is {temp}F in {location}</h3>
  );
}
module.exports = WeatherMessage;


//other Method//
/*
var WeatherMessage = React.createClass({
  render: function() {
    var {temp,location} = this.props;
    return (
      <div>
        <div>Current Weather is {temp}F in {location}</div>
      </div>
    );
  }
})*/
