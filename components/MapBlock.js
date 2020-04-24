import React, {Component} from 'react';
import {View, Image} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken("pk.eyJ1IjoiYWxtb3NrIiwiYSI6ImNrOHhhdWw3MzBodGkzbG8wMzZhYm4waHcifQ.xy56Az5bM0S2EzXR_gdYjw");

const coordinates = [
  [-73.98330688476561, 40.76975180901395],
  [-73.96682739257812, 40.761560925502806],
  [-74.00751113891602, 40.746346606483826],
  [-73.95343780517578, 40.7849607714286],
  [-73.99017333984375, 40.71135347314246],
  [-73.98880004882812, 40.758960433915284],
  [-73.96064758300781, 40.718379593199494],
  [-73.95172119140624, 40.82731951134558],
  [-73.9829635620117, 40.769101775774935],
  [-73.9822769165039, 40.76273111352534],
  [-73.98571014404297, 40.748947591479705]
]

class MapBlock extends Component {
  constructor (props) {
    super(props);

    this.state = {
      coordinates: coordinates
    };
  }

  renderAnnotation (counter) {
    const id = `pointAnnotation${counter}`;
    const coordinate = this.state.coordinates[counter];
    const title = `Longitude: ${this.state.coordinates[counter][0]} Latitude: ${this.state.coordinates[counter][1]}`;

    return (
      <MapboxGL.PointAnnotation
        key={id}
        id={id}
        title='Test'
        coordinate={coordinate}>

        <Image
        source={require('../assets/images/marker.png')}
        style={{
          flex: 1,
          resizeMode: 'contain',
          width: 24,
          height: 24
          }}/>
      </MapboxGL.PointAnnotation>
    );
  }

  renderAnnotations () {
    const items = [];

    for (let i = 0; i < this.state.coordinates.length; i++) {
      items.push(this.renderAnnotation(i));
    }

    return items;
  }

  render () {
    return (
      <View style={{
          flex: 1,
          width: '100%',
          height: 600
        }}>
        <MapboxGL.MapView
        ref={(c) => this._map = c}
        style={{flex: 1}}
        zoomLevel={11}
        showUserLocation={true}
        userTrackingMode={1}
        centerCoordinate={this.state.coordinates[0]}>
          {this.renderAnnotations()}
        </MapboxGL.MapView>
      </View>
      );
  }
}

export default MapBlock
