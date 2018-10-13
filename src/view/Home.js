import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import cityaction from '../controller/actions/cityaction'

import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.props.resetcity();
    this.state = { address: '' };


  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.items.weatherupdatestaus == true) {
      this.props.history.push('/weather');
    }
  }


  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    this.props.updatecity(address);
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.updateweather(latLng))
      .catch(error => console.error('Error', error));
  };


  render() {



    return (
      <div>
        <div class="container">
        <h1>Select the City </h1>
        </div>
        <div class="container">
         
            <PlacesAutocomplete
              value={this.state.address}
              onChange={this.handleChange}
              onSelect={this.handleSelect}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                  <input
                    {...getInputProps({
                      placeholder: 'Search Places ...',
                      className: 'location-search-input',
                    })}
                  />
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                      const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </div>

        </div>





     
    );
  }
}


const mapStateToProps = (state) => {
  return {
    items: state.cityDetail,
  };
};
const matchDispatchToProps = dispatch => (
  bindActionCreators({ ...cityaction }, dispatch));

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Home));