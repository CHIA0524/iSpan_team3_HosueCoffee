import React, { useEffect } from "react";
import { MarkerClusterer, GridAlgorithm } from "@googlemaps/markerclusterer";
import { useGoogleMap } from "@react-google-maps/api";

const StoreMapClusterer = ({ data }) => {
  const map = useGoogleMap();
  // const algorithm = new GridAlgorithm();

  useEffect(() => {
    console.log(map);
    // eslint-disable-next-line no-undef
    if (map instanceof google.maps.Map) {
      const algorithm = new GridAlgorithm({});
      const markers = data.map(
        (position) =>
          // eslint-disable-next-line no-undef
          new google.maps.Marker({
            lat: position.lat, lng: position.lng,
            map
          })
      );
      const markerClusterer = new MarkerClusterer({ markers, algorithm });

      markerClusterer.setMap(map);
    }
  }, [data, map]);

  return <div>Hello CLusterer</div>;
};

export default StoreMapClusterer;
