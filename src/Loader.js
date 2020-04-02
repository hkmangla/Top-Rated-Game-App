import React from "react";
import { Typography, CircularProgress, Box } from "@material-ui/core/";

export default function Loader(props) {
  if (props.showLoader) {
    return (
      <Box
        zIndex={9999}
        bgcolor={"transparent"}
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
      >
        <Box
          className="loader"
          flexDirection="column"
          display="flex"
          height={1}
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress color="primary" />
          <Typography color="primary">{props.text}</Typography>
        </Box>
      </Box>
    );
  } else {
    return null;
  }
}
