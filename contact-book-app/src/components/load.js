import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import * as React from "react";

export default function Load(props) {
  const { size } = props;

  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress size={size} />
    </Box>
  );
}
