var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var location = this.refs.location.value;

    if(location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <form onSubmit={this.onFormSubmit}>
          <div><input type="text" ref = 'location' placeholder = "Enter city name"/></div>
          <div><button className="hollow button expanded">Get Weather</button></div>
        </form>
      </div>
    );
  }
})

module.exports = WeatherForm;
