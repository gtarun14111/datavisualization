import DottedMap from './dotted-map';
import mapJsonString from './map-preload.js';
import { CircleMarker, Tooltip, MapContainer, ImageOverlay } from "react-leaflet";
import styled from "styled-components/macro";
import "leaflet/dist/leaflet.css";
import { mapData } from './mapData.js';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BusinessIcon from '@mui/icons-material/Business';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';



const tooltipStyle = [
  {
    city: "Cairo",
    color: "#FF7E7E",
    icon: <BusinessIcon />
  },
  {
    city: "New York",
    color: "#669AFF",
    icon: <LocationCityIcon />
  },
  {
    city: "Mexico City",
    color: "#7BDDA2",
    icon: <ApartmentIcon />
  },
  {
    city: "Sao Paulo",
    color: "#F8A243",
    icon: <AccountBalanceIcon />
  },
  {
    city: "Seoul",
    color: "#66C8FF",
    icon: <MapsHomeWorkIcon />
  },
]

const majorCities = mapData.filter((object) => {
    if(object.population > 18700000 && object.population < 24000000){
      tooltipStyle.map((city) => {
        if(city.city === object.city) {
          object.color = city.color;
          object.icon = city.icon;
        }
      })
      return object
    }
  }
)


const bounds = [
  [-56, -179],
  [71, 179],
];

const Maps = styled(MapContainer)`
  height: 482px;
  width: 74.5vw;
  background-color: #E2E4F0;
`;

function pinGenerate(map) {
  mapData.map((object) => {
  if (object.population > 20000000) {
    return(
    map.addPin({
      lat: object.lat,
      lng: object.lng,
      svgOptions: { color: "#FF2D2E",
    radius: 0.26}
  }))
  }
  else if (object.population > 15000000) {
    return(
    map.addPin({
      lat: object.lat,
      lng: object.lng,
      svgOptions: { color: "#8676FF",
    radius: 0.26}
  }))
  }
  else {
    return(
    map.addPin({
      lat: object.lat,
      lng: object.lng,
      svgOptions: { color: "rgba(134, 118, 255, 0.7)",
    radius: 0.26}
  }))
  }
  })
}

const map = new DottedMap({ map: JSON.parse(mapJsonString) });

pinGenerate(map);

const svgMap = map.getSVG({
  radius: 0.26,
  color: 'snow',
  shape: 'hexagon',
  backgroundColor: '#E2E4F0',
});


const Map = () => {

  return (
    <div className='Map'>
    <Maps
      center={[16.5, 0]}
      zoom={2}
      maxZoom={6}
      minZoom={1}
      attributionControl={false}
      zoomControl={false}
    >
      <ImageOverlay
        url={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        bounds={bounds}
      />
      {majorCities.map((city) => {
        return (
          <CircleMarker
          center={[city.lat, city.lng]}
          radius={0.4}
          pathOptions={{
            fillColor: "#F0F600",
            color: "transparent",
            fillOpacity: 1,
          }}
          key={city.population}
          >
            <Tooltip permanent
            direction='top'
            opacity={1}
            className='leaflet-tooltip'
            > 
            <div className='toolTip'>
              <div className='toolTipIcon' style={{backgroundColor: city.color}}>
              {city.icon}
              </div>
              <div>
              {city.city}<br />
              <span style={{ fontSize: '1.3em'}}>{city.population}</span>
              </div>
              </div>
            </Tooltip>
            </CircleMarker>
        )
      })}
    </Maps>
    </div>
  );
};

export default Map;