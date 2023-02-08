import { Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://www.google.com/search?q=croquetes&oq=croquetes&aqs=chrome..69i57j46i433i512j0i433i512j0i512l7.1167j1j4&sourceid=chrome&ie=UTF-8"
      >
        Varelinha dos Croquete
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default Copyright;
