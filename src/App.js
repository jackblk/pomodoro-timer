import React from "react";
import { Button } from "@moai/core";

export function App() {
  return (
    <div>
      <h1>Welcome {new Date().toDateString()}</h1>
      {<Button>Hello</Button>}
    </div>
  );
}
