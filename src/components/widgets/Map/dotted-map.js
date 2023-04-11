import proj4 from 'proj4';
import inside from '@turf/boolean-point-in-polygon';

function DottedMap({ map, avoidOuterPins = false }) {
  const {
    points,
    X_MIN,
    Y_MAX,
    X_RANGE,
    Y_RANGE,
    region,
    grid,
    width,
    height,
    ystep,
  } = map;

  return {
    addPin({ lat, lng, data, svgOptions }) {
      const pin = this.getPin({ lat, lng });
      const point = { ...pin, data, svgOptions };

      points[[point.x, point.y].join(';')] = point;

      return point;
    },
    getPin({ lat, lng }) {
      const [googleX, googleY] = proj4(proj4.defs('GOOGLE'), [lng, lat]);
      if (avoidOuterPins) {
        const wgs84Point = proj4(proj4.defs('GOOGLE'), proj4.defs('WGS84'), [
          googleX,
          googleY,
        ]);
        if (!inside(wgs84Point)) return;
      }
      let [rawX, rawY] = [
        (width * (googleX - X_MIN)) / X_RANGE,
        (height * (Y_MAX - googleY)) / Y_RANGE,
      ];
      const y = Math.round(rawY / ystep);
      if (y % 2 === 0 && grid === 'diagonal') {
        rawX -= 0.5;
      }
      const x = Math.round(rawX);
      let [localx, localy] = [x, Math.round(y) * ystep];
      if (y % 2 === 0 && grid === 'diagonal') {
        localx += 0.5;
      }

      const [localLng, localLat] = proj4(
        proj4.defs('GOOGLE'),
        proj4.defs('WGS84'),
        [
          (localx * X_RANGE) / width + X_MIN,
          Y_MAX - (localy * Y_RANGE) / height,
        ],
      );

      const pin = { x: localx, y: localy, lat: localLat, lng: localLng };

      return pin;
    },
    getPoints() {
      return Object.values(points);
    },
    getSVG({
      shape = 'circle',
      color = 'current',
      backgroundColor = 'transparent',
      radius = 0.5,
    }) {
      const getPoint = ({ x, y, svgOptions = {} }) => {
        const pointRadius = svgOptions.radius || radius;
        if (shape === 'circle') {
          return `<circle cx="${x}" cy="${y}" r="${pointRadius}" fill="${
            svgOptions.color || color
          }" />`;
        } else if (shape === 'hexagon') {
          const sqrt3radius = Math.sqrt(3) * pointRadius;

          const polyPoints = [
            [x + sqrt3radius, y - pointRadius],
            [x + sqrt3radius, y + pointRadius],
            [x, y + 2 * pointRadius],
            [x - sqrt3radius, y + pointRadius],
            [x - sqrt3radius, y - pointRadius],
            [x, y - 2 * pointRadius],
          ];

          return `<polyline points="${polyPoints
            .map((point) => point.join(','))
            .join(' ')}" fill="${svgOptions.color || color}" />`;
        }
      };

      return `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" style="background-color: ${backgroundColor}" filter="url(#filter0_dddddd_625_20601)">
        ${Object.values(points).map(getPoint).join('\n')}
        
<defs>
<filter id="filter0_dddddd_625_20601" x="0" y="0" width="1501" height="935.948" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2.76726"/>
<feGaussianBlur stdDeviation="1.1069"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.423529 0 0 0 0 0.286275 0 0 0 0 0.67451 0 0 0 0.0196802 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_625_20601"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="6.6501"/>
<feGaussianBlur stdDeviation="2.66004"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.423529 0 0 0 0 0.286275 0 0 0 0 0.67451 0 0 0 0.0282725 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_625_20601" result="effect2_dropShadow_625_20601"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="12.5216"/>
<feGaussianBlur stdDeviation="5.00862"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.423529 0 0 0 0 0.286275 0 0 0 0 0.67451 0 0 0 0.035 0"/>
<feBlend mode="normal" in2="effect2_dropShadow_625_20601" result="effect3_dropShadow_625_20601"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="22.3363"/>
<feGaussianBlur stdDeviation="8.93452"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.423529 0 0 0 0 0.286275 0 0 0 0 0.67451 0 0 0 0.0417275 0"/>
<feBlend mode="normal" in2="effect3_dropShadow_625_20601" result="effect4_dropShadow_625_20601"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="41.7776"/>
<feGaussianBlur stdDeviation="16.711"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.423529 0 0 0 0 0.286275 0 0 0 0 0.67451 0 0 0 0.0503198 0"/>
<feBlend mode="normal" in2="effect4_dropShadow_625_20601" result="effect5_dropShadow_625_20601"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="100"/>
<feGaussianBlur stdDeviation="40"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.423529 0 0 0 0 0.286275 0 0 0 0 0.67451 0 0 0 0.07 0"/>
<feBlend mode="normal" in2="effect5_dropShadow_625_20601" result="effect6_dropShadow_625_20601"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_625_20601" result="shape"/>
</filter>
</defs>
      </svg>`;
    },
    image: {
      region,
      width,
      height,
    },
  };
}

export default DottedMap;