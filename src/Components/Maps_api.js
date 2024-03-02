import React, { useEffect } from 'react';

const Maps_api = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik&callback=iniciarMap`;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    function iniciarMap() {
        var coord = { lat: 28.6405398, lng: -106.0898051 };
        var map = new window.google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: coord
        });
        var marker = new window.google.maps.Marker({
            position: coord,
            map: map
        });
    }

    return (
        <div id="map" style={{ height: '400px' }}></div>
    );
};

export default MapsApi;
