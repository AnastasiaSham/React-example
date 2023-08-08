import React, { useState } from 'react';
import MapGL, { Source, Layer, FullscreenControl, NavigationControl } from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {ACCESS_TOKEN} from './service'

const Content = ({data, onClick}) => {
  const [viewport, setViewport] = useState({
    latitude: 59.944548,
    longitude: 30.304617
  })

  // const [position, setPosition] = useState({
  //   longitude: 0,
  //   latitude: 0
  // });

  // const style = {
  // padding: '10px',
  // color: '#fff',
  // cursor: 'pointer',
  // background: '#1978c8',
  // borderRadius: '10px'
  // };
  
  // const onClick = (event) => {
  //   setPosition({ 
  //     longitude: event.lngLat.lng, 
  //     latitude: event.lngLat.lat 
  //   });
  // };

  //  const onMarkerClick = (event) => {
  //     event.stopPropagation();
  //  };

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
      {/* <Marker
        latitude={position.latitude}
        longitude={position.longitude}
        onClick={onMarkerClick}
      >
        <div style={style}></div>
      </Marker>  */}
      <NavigationControl showCompass showZoom position='top-right' />
      <FullscreenControl position='top-right' />
    </MapGL>
  ) 
}

export default Content;