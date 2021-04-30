import React, { createContext } from "react";

export default React.createContext<any>({
  state: {},
  setState: (setState: any) => {},
});
