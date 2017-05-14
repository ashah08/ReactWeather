var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    var self = this;

    self.setState({
      isLoading : true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then(function(temp){
      self.setState({
        location: location,
        temp: temp,
        isLoading: false,
      });
    },function(e){
      self.setState({
        isLoading : false,
        errorMessage : e.message
      });
    });
  },
  componentDidMount:function(){
     var location = this.props.location.query.location;
     if(location && location.length > 0){
       this.handleSearch(location);
       window.location.hash = '#/';
     }
  },
  componentWillReceiveProps : function(newProps){
    var location = newProps.location.query.location;
    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render:function(){
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage(){
      if (isLoading) {
          return <h3 className="center">Fetching Weather ...</h3>;
      }else if (temp && location){
         return <div><WeatherMessage temp={temp} location={location}/></div>
      }
    }
    function renderError(){
      if (typeof errorMessage === 'string'){
        return(
          <ErrorModal message={errorMessage}/>
        )
      }
    }
    return(
      <div>
       <div><WeatherForm onSearch = {this.handleSearch}/></div>
       {renderMessage()}
       {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
