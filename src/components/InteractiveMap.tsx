import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography, Graticule } from 'react-simple-maps';

const geoUrl = "https://raw.githubusercontent.com/lotusms/world-map-data/main/world.json";

const InteractiveMap: React.FC = () => {
  const MY_LOCATION_ISO = "ESP"; 
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const handleCountryClick = (geoId: string) => {
    if (isMobile) setSelectedCountry(geoId === selectedCountry ? null : geoId);
  };

  return (
    <div className="interactive-map-wrapper" style={{ width: '100%', height: '100%' }}>
      <ComposableMap
        width={800}
        height={450} 
        projectionConfig={{ 
          scale: isMobile ? 380 : 210,    
          center: isMobile ? [8, 42] : [0, 8] 
        }}
        style={{ width: "100%", height: "100%", objectFit: 'cover' }}
      >
        <Graticule stroke="rgba(255,255,255,0.015)" strokeWidth={0.5} />
        <Geographies geography={geoUrl}>
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo: any) => {
              const isMyLocation = geo.id === MY_LOCATION_ISO || geo.properties?.ISO_A3 === MY_LOCATION_ISO;
              const isSelected = selectedCountry === geo.id;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  className="rsm-geography"
                  data-my-location={isMyLocation}
                  data-is-selected={isSelected}
                  onClick={() => handleCountryClick(geo.id)}
                  style={{
                    default: {
                      fill: isMyLocation ? "rgba(255, 51, 102, 0.2)" : "rgba(30, 41, 59, 0.4)",
                      // CAMBIO: Ahora en PC también hay un borde azul muy, muy sutil de base
                      stroke: isMyLocation ? "#ff3366" : "rgba(0, 229, 255, 0.08)",
                      strokeWidth: isMyLocation ? 3.5 : 0.6,
                      outline: "none",
                      transition: "all 500ms ease",
                    },
                    hover: {
                      fill: isMyLocation ? "rgba(255, 51, 102, 0.4)" : "rgba(0, 229, 255, 0.15)",
                      stroke: isMyLocation ? "#ff3366" : "#00e5ff",
                      strokeWidth: isMyLocation ? 4 : 2,
                      outline: "none",
                      cursor: "pointer",
                      filter: isMyLocation 
                        ? "drop-shadow(0 0 20px #ff3366)" 
                        : "drop-shadow(0 0 12px #00e5ff)",
                    },
                    pressed: { outline: "none" }
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default InteractiveMap;