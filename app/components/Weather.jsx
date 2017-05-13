var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    var self = this;
    this.setState({isLoading : true});
    openWeatherMap.getTemp(location).then(function(temp){
      self.setState({
        location: location,
        temp: temp,
        isLoading: false,
      });
    },function(errorMessage){
      self.setState({isLoading : true});
      alert(errorMessage)
    });
  },

  render:function(){
    var {isLoading, temp, location} = this.state;

    function renderMessage(){
      if (isLoading) {
          return <h3>Fetching Weather ...</h3>;
      }else if (temp && location){
         return <div><WeatherMessage temp={temp} location={location}/></div>
      }
    }
    return(
      <div>
       <div><WeatherForm onSearch = {this.handleSearch}/></div>
       {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;