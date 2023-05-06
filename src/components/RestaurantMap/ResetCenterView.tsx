import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

import { Location } from "./";

type ResetCenterViewProps = { location?: Location };

const ResetCenterView: React.FC<ResetCenterViewProps> = ({ location }) => {
  const map = useMap();

  useEffect(() => {
    if (location) {
      map.setView(L.latLng(location?.lat, location?.lon), map.getZoom(), {
        animate: true,
      });
    }
  }, []);

  if (location) {
    map.setView(L.latLng(location?.lat, location?.lon), map.getZoom(), {
      animate: true,
    });
  }
  return null;
};

export { ResetCenterView };
