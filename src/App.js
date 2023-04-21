import BigScreen from "./layout/BigScreen";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function App() {
  const theme = useTheme();

  // return <>{isSmall ? <SmallScreen /> : <BigScreen />}</>;
  return <BigScreen />;
}

export default App;
