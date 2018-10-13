import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import cityaction from '../controller/actions/cityaction'

import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Col, Row
} from 'reactstrap';

class weather extends Component {
  constructor(props) {
    super(props);
    // this.state.data = [];
    // for (var i in this.props.items.weather.list) {
    //   this.state.data.push(this.props.items.weather.list[i])
    // }
  }

  componentDidMount() {

  }

  render() {
    var weatherList = [];
    weatherList = this.props.items.weather.list;
    var WeatherDetailList = weatherList.map((item, index) => {
      var dd = new Date(item.dt_txt).getDate();
      var mm = new Date(item.dt_txt).getMonth() + 1; //January is 0!
      var yyyy = new Date(item.dt_txt).getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      var _tempDate = dd + '/' + mm + '/' + yyyy;
      item._tempDate = _tempDate
      var hours = new Date(item.dt_txt).getHours();
      var minutes = new Date(item.dt_txt).getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      item.strTime = strTime
    });



    let content = [];
    const rows = [...Array(Math.ceil(this.props.items.weather.list.length / 4))];
    const productRows = rows.map((row, idx) => this.props.items.weather.list.slice(idx * 4, idx * 4 + 4));
    var _tempwed = productRows.map((row, idx) => (
      <div className="row" key={idx}>
        {row.map(_item =>
          <div key={_item} className="col-md-3"> <Card>
            <CardBody>
              <CardTitle>{_item._tempDate}</CardTitle>
              <CardSubtitle>{_item.strTime}</CardSubtitle>
              <CardText> Temprature:{parseInt(_item.main.temp -273.15)}</CardText> 
              <CardText>Forecast:{_item.weather[0].description}</CardText>
            </CardBody>
          </Card></div>)}
      </div>)



    );



    return (
      <div className="weather">
        <div class="container">
        <h1>Weather for next five days for {this.props.items.city}  </h1> 
        </div>
   
         {_tempwed} 

      </div>

    )
  }

}
const mapStateToProps = (state) => {
  return {
    items: state.cityDetail,
  };
};
const matchDispatchToProps = dispatch => (
  bindActionCreators({ ...cityaction }, dispatch));

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(weather));


