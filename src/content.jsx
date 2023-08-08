import React, { useState } from 'react';
import MapGL, { Source, Layer, FullscreenControl, NavigationControl } from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {ACCESS_TOKEN} from './service'


const Content = ({data, onClick}) => {
  const [viewport, setViewport] = useState({
    latitude: 59.944548,
    longitude: 30.304617
  })

  return (
    
    <MapGL
      style={{ width: '100%', height: '100vh' }}
      mapStyle='mapbox://styles/mapbox/light-v9'
      accessToken={ACCESS_TOKEN}
      latitude={59.944548}
      longitude={30.304617}
      zoom={12}
      onViewportChange={setViewport}
       {...viewport}
      onClick={onClick}
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