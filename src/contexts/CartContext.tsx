import React, { createContext } from "react";

export default React.createContext<any>({
  books: [],
  updateBooks: (setBooks: any) => {},
});
