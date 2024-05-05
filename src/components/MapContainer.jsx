import { useRef, useEffect } from 'react';
import maplibregl, { Map } from 'maplibre-gl';

import './Map.css';
import { onMapLoad, style } from '../utils/map.js';

export default function MapContainer(props) { 
    const containerRef = useRef(null);
    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current) return;
    
        mapRef.current = new maplibregl.Map({
            style: style,
            container: containerRef.current,
            center: [0, 0], 
            zoom: 0
          });
    
    
        onMapLoad({map:mapRef.current})
    
      });

      return (
        <div className="map-container">
         <div ref={containerRef} className="map" />
      </div>
      );
}
