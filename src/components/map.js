import maplibregl from 'maplibre-gl';

export const simpleOSMstyle = {
    'version': 8,
    'sources': {
    'raster-tiles': {
        'type': 'raster',
        'tiles': ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
        'tileSize': 256,
        'attribution':'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
    },
    'layers': [
            {
                'id': 'simple-tiles',
                'type': 'raster',
                'source': 'raster-tiles',
                'minzoom': 0,
                'maxzoom': 22
            }
        ]
    }

export function onMapLoad(props){
    const {map} = props;

    addControls({map});
    addEventListener({map});

}


function addControls(props){
    const {map,
    enableNavigationControl=true} = props;

    if(enableNavigationControl){
        map.addControl(new maplibregl.NavigationControl());
    }
    
}

function addEventListener(props){
    const {map} = props;

    map.on('load', () => {
        console.log('Map is loaded');
    });

    map.on('click', (e) => {
        console.log('Map clicked:', e.lngLat);
    });

    map.on('move', () => {
        console.log('Map moved:', map.getCenter());
    });
}