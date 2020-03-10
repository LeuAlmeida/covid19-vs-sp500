import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

import api, { geoUrl } from '../../services/api';

import { Marked } from './styles';

function MapChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadCases() {
      const response = await api.get('/all');

      const content = response.data.confirmed.locations;

      const locations = content.map(loc => ({
        markerOffset: -10,
        name: loc.country,
        coordinates: [loc.coordinates.long, loc.coordinates.lat],
        cases: loc.latest,
      }));

      setData(locations);
    }

    loadCases();
  }, []);

  return (
    <ComposableMap style={{ margin: '-70 0' }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
            />
          ))
        }
      </Geographies>
      {data.map(({ name, coordinates, markerOffset, cases }) => (
        <Marked
          key={`${name}-${Math.floor(Math.random() * 100000)}`}
          coordinates={coordinates}
        >
          <circle r={2} fill="#F00" strokeWidth={2} />
          <text textAnchor="middle" y={markerOffset}>
            {`${name}: ${cases > 1 ? `${cases} cases.` : `${cases} case.`}`}
          </text>
        </Marked>
      ))}
    </ComposableMap>
  );
}

export default MapChart;
