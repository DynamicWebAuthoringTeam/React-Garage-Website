/**
 * !!! This is not our work we are using a tutorial/instructions from a library !!!
 * 
 * This Section was copied from:  Library + Tutorials References below
 * 
 * This is not our work we are using this to implement a google api's map location in react.
 * 
 * We do not have time to write a google api library ourselves
 * 
 * This is an example from the library @react-google-maps/api
 *
 * 
 * We do not take credit for any of the code here
 * 
 * References:
 *          Library  : https://www.npmjs.com/package/@react-google-maps/api
 *          Tutorials: https://react-google-maps-api-docs.netlify.app/
 */
 import React from 'react'
 import { GoogleMap, LoadScript } from '@react-google-maps/api';
 import { Marker } from '@react-google-maps/api';

 const containerStyle = {
    height: "400px",
    width: "100%"
  }

 const coords = {
    lat: 54.588632,
    lng: -5.924312
  }

  const onLoad = marker => {
    console.log('marker: ', marker)
  }
 
 function MyComponent() {
   return (
     <LoadScript googleMapsApiKey='AIzaSyCJualtIlFiU6Jz-wRrIdbPwlDmBYvLKu0'>
       <GoogleMap mapContainerStyle={containerStyle} center={coords} zoom={16}>
         <> <Marker onLoad={onLoad} position={coords}/> </>
       </GoogleMap>
     </LoadScript>
   )
 }
 
 export default React.memo(MyComponent)