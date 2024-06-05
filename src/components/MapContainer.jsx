import { useRef, useEffect } from 'react';
import maplibregl, { Map } from 'maplibre-gl';

import './Map.css';
import { onMapLoad } from './map.js';


const emptyStyle = maplibregl.Style.createEmpty();

export default function MapContainer(props) { 
    // if style is not passed, use the empty style
    const {style = emptyStyle,
          center=[0,0],
          zoom=0} = props;

    const containerRef = useRef(null);
    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current) return; // initialize map only once
    
        mapRef.current = new maplibregl.Map({
            style: style,
            container: containerRef.current,
            center: [0, 0], 
            zoom: 0
          });
    
          
        // Perform something when the map is loaded
        onMapLoad({map:mapRef.current})
    
      });

      return (
        <div className="map-container">
         <div ref={containerRef} className="map" />
      </div>
      );
}
