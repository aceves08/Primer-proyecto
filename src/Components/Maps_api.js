import React, { useEffect, useState } from 'react';
import {GoogleMap, useLoadScript, MarkerF} from '@react-google-maps/api'

const Maps_api = (props) => {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: 'AIzaSyBnBBYXMcmZI6kGH8LMpsGuRJJUzoEB0EU'
    });
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    },[]);
    if(loadError) return "Error";
   
    return (
        <div style={{marginTop: "50px"}}> 
            <GoogleMap mapContainerStyle={{height:"400px"}} center={{lat:28.6405398, lng:-106.0898051}} zoom={19} onLoad={onMapLoad}/>
        </div>
    );
};

export default Maps_api;
