import React, { useMemo } from "react";
import { Box, Text } from "@chakra-ui/react";
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// import { , Marker } from "react-google-maps";

export default function OurBranches() {
  // const googleMapsApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

  // AIzaSyDuMY7rvWy4O10VHG0AvsM8N_y-cWuaQaU

  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY || "",

  // });

  // const center = useMemo(() => ({ lat: 53.339688, lng: -6.236688 }), []);


  return (
    <Box
      className="container"
      m={"auto"}
      mt={"125px"}
      bg={"#181529"}
      color={"#FEFEFE"}
      paddingTop={"70px"}
      h={"785px"}
      w={"90%"}
      borderRadius={"70px"}
    >
      <Box className="sub-container1">
        <Text fontSize="xl" color="orange" className="heading-text">
          Our Branches
        </Text>
        <Text fontSize="5xl" color="" as="b" className="sub-heading-text">
          <span style={{ color: "#5E8AF9" }}>Visit Us</span> and Get Your
          <br />
          Business Growth
        </Text>
      </Box>
      <Box className="sub-container2" height={"100vh"} width={"80vw"}>
        {/* {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={10}
          >
            <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
          </GoogleMap>
        )} */}
        {/* {isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
          >
            <Marker
              position={{ lat: 39.09366509575983, lng: -94.58751660204751 }}
            />
          </GoogleMap>
        )} */}
      </Box>
    </Box>
  );
}

// import React, { useMemo } from "react";
// import { Box, Text } from "@chakra-ui/react";
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// // AIzaSyB39T7r_L0T1gg_wvJpdY94g3GW98eyR7E

// export default function OurBranches() {
//   const googleMapsApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
//   });
//   const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

//   return (
//     <Box
//       className="container"
//       m={"auto"}
//       mt={"125px"}
//       bg={"#181529"}
//       color={"#FEFEFE"}
//       paddingTop={"70px"}
//       h={"785px"}
//       w={"90%"}
//       borderRadius={"70px"}
//     >
//       <Box className="sub-container1">
//         <Text fontSize="xl" color="orange" className="heading-text">
//           Our Branches
//         </Text>
//         <Text fontSize="5xl" color="" as="b" className="sub-heading-text">
//           <span style={{ color: "#5E8AF9" }}>Visit Us</span> and Get Your
//           <br />
//           Business Growth
//         </Text>
//       </Box>
//       <Box className="sub-container2" h={"90vh"} w={"90vw"}>
//         {!isLoaded ? (
//           <h1>Loading...</h1>
//         ) : (
//           <GoogleMap
//             mapContainerClassName="map-container"
//             center={center}
//             zoom={10}
//           />
//         )}
//       </Box>
//     </Box>
//   );
// }
