import React, { useEffect } from "react";
import { Button } from "@moai/core";
// import { CgDarkMode } from "react-icons";
import { CgDarkMode } from "@react-icons";
import { keepTheme, toogleThemeButton } from "./utils/theme";

export function App() {
  useEffect(() => {
    keepTheme();
  });

  return (
    <div>
      <h1>Today is {new Date().toDateString()}</h1>
      {
        <Button
          icon={CgDarkMode}
          iconLabel="Toogle Dark theme"
          onClick={toogleThemeButton}
        ></Button>
      }
    </div>
  );
}
