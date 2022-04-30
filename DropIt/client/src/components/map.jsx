import React, { useState, useEffect, useRef } from 'react';
import ReactMapGL, { GeolocateControl, NavigationControl } from "react-map-gl";
// import mapboxgl from 'mapbox-gl'
import "./map.css"
import Geocoder from 'react-mapbox-gl-geocoder'
const geolocateControlStyle = {
  right: 10,
  top: 10

};

const navControlStyle = {
  left: 10,
  top: 200
};

const queryParams = {
  country: 'in'
}


export default function Map() {

  const [viewport, setViewport] = useState({
    width: 600,
    height: 500,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  // const mapContainer = useRef(null);
  // const map = useRef(null);
  // const [lng, setLng] = useState(-70.9);
  // const [lat, setLat] = useState(42.35);
  // const [zoom, setZoom] = useState(9);

  // const nav = new mapboxgl.NavigationControl({
  //   visualizePitch: true
  //   });



  //   // var directions = new MapboxDirections({
  //   //   accessToken: process.env.REACT_APP_MAPBOX
  //   // })

  // useEffect(() => {
  //   if (map.current) return; // initialize map only once
  //   map.current = new mapboxgl.Map({
  //   container: mapContainer.current,
  //   style: 'mapbox://styles/darksider51/ckpijb0qi1unb17rtosxrlaz7',
  //   center: [lng, lat],
  //   zoom: zoom,
  //   accessToken:process.env.REACT_APP_MAPBOX
  //   });




  //   },[]);

  // useEffect(()=>{
  //   if(!map.current) return;

  //   map.current.on('move', () => {
  //     setLng(map.current.getCenter().lng.toFixed(4));
  //     setLat(map.current.getCenter().lat.toFixed(4));
  //     setZoom(map.current.getZoom().toFixed(2));
  //     });





  // },[])


  // useEffect(()=>{
  // map.current.on("load",()=>{
  //   map.current.addControl(new mapboxgl.GeolocateControl({
  //     positionOptions: {
  //     enableHighAccuracy: true
  //     },
  //     trackUserLocation: true,
  //     showUserHeading: true
  //     }));
  // })

  // map.current.addControl(nav, 'bottom-right');

  // var directions = new mapboxgl.MapboxDirections({
  //   accessToken: process.env.REACT_APP_MAPBOX
  // })

  // var t=new mapboxgl.
  // map.addControl(directions, "top-left")
  // },[])


  function onselected(viewport, item) {
    setViewport(viewport)
    console.log(viewport)
    console.log("item:", item)
  }

  return (
    <ReactMapGL {...viewport} width="40vw" height="40vh" onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      mapStyle="mapbox://styles/darksider51/ckpijb0qi1unb17rtosxrlaz7"
    >

      <Geocoder
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onSelected={onselected}
        viewport={viewport}
        queryParams={queryParams}
      />
      <GeolocateControl
        className="geocontrol"
        style={geolocateControlStyle}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
        auto
      />
      <NavigationControl style={navControlStyle} />
    </ReactMapGL>

    // {/* <div  ref={mapContainer} className="map-container" /> */}

  );
}