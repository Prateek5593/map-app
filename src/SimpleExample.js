// // @flow

// import React, { Component } from 'react'
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

// // type State = {
// //   lat: number,
// //   lng: number,
// //   zoom: number,
// // }

// export default class SimpleExample extends Component {
//   state = {
//     lat: 51.505,
//     lng: -0.09,
//     zoom: 2,
//   }

//   render() {
//     const position = [this.state.lat, this.state.lng]
//     return (
//       <Map center={position} zoom={this.state.zoom} style={{ width: '100%', height: '700px'}}>
//         <TileLayer
//           attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={position}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//       </Map>
//     )
//   }
// }

// @flow


import React, { Component } from 'react'
import {
  Map,
  Popup,
  TileLayer,
  Marker,
} from 'react-leaflet';
import MarkerClusterGroup from "react-leaflet-markercluster";
import { customData } from "./data";

const coordinates = {
    'Australia (AU)': [-25.2744, 133.7751],
    'United Kingdom (GB)': [ 55.3781, -3.4360],
    'United States (US)': [ 37.0902, -95.7129 ],
}
console.log('TCL:: coordinates', coordinates);

let MarkerArr = [];

customData.forEach( (element, idx) => {
    const position = coordinates[element.Country]
    MarkerArr.push(
        <Marker position={position} key={idx}>
           <Popup>
             <ul>
                <li>Asset: {' ' + element.Asset}</li>
                <li>LGY load status: {' ' + element['LGY load status']}</li>
                <li>Data type: {' ' + element['Data type']}</li>
             </ul>
           </Popup>
         </Marker>
    );
});

const center = [51.505, -0.09]

// const polyline = [
//   [51.505, -0.09],
//   [51.51, -0.1],
//   [51.51, -0.12],
// ]

// const multiPolyline = [
//   [
//     [51.5, -0.1],
//     [51.5, -0.12],
//     [51.52, -0.12],
//   ],
//   [
//     [51.5, -0.05],
//     [51.5, -0.06],
//     [51.52, -0.06],
//   ],
// ]

// const polygon = [
//   [51.515, -0.09],
//   [51.52, -0.1],
//   [51.52, -0.12],
// ]

// const multiPolygon = [
//   [
//     [51.51, -0.12],
//     [51.51, -0.13],
//     [51.53, -0.13],
//   ],
//   [
//     [51.51, -0.05],
//     [51.51, -0.07],
//     [51.53, -0.07],
//   ],
// ]

// const rectangle = [
//   [51.49, -0.08],
//   [51.5, -0.06],
// ]

export default class VectorLayersExample extends Component<> {
  render() {
    return (
      <Map center={center} zoom={6}  style={{ width: '100%', height: '700px'}}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Circle center={center} fillColor="blue" radius={200} />
        <CircleMarker center={[-25.2744, 133.7751]} color="red" radius={20}>
          <Popup>Popup in CircleMarker</Popup>
        </CircleMarker>
        <Polyline color="lime" positions={polyline} />
        <Polyline color="lime" positions={multiPolyline} />
        <Polygon color="purple" positions={polygon} />
        <Polygon color="purple" positions={multiPolygon} />
        <Rectangle bounds={rectangle} color="black" /> */}
        <MarkerClusterGroup>
            {MarkerArr}
        </MarkerClusterGroup>
        {/* {MarkerArr} */}
      </Map>
    )
  }
}