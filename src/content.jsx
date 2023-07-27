import React, { useState } from 'react';
import MapGL, { Source, Layer, FullscreenControl, NavigationControl } from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {ACCESS_TOKEN} from './service'

const Content = ({data}) => {
  const [viewport, setViewport] = useState({
    latitude: 45.137451890638886,
    longitude: -68.13734351262877,
    zoom: 5
  });

  return (
    <MapGL
      style={{ width: '100%', height: '100vh' }}
      mapStyle='mapbox://styles/mapbox/light-v9'
      accessToken={ACCESS_TOKEN}
      onViewportChange={setViewport}
      {...viewport}
      onClick={(a,b) => {console.log(a,b)}}
    >
      {data ? <><Source id='maine' type='geojson' data={data} />
      <Layer
        id='maine'
        type='fill'
        source='maine'
        paint={{
          'fill-color': '#088',
          'fill-opacity': 0.8
        }}
      /></> : null}
      <NavigationControl showCompass showZoom position='top-right' />
      <FullscreenControl position='top-right' />
    </MapGL>
 ) 
}

export default Content;