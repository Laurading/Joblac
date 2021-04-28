import React, { useReducer } from "react";

const initialState = {
  books: [],
};

const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case "addBook":
      const arrayBook = state.books;
      console.log("arrr", arrayBook);
      arrayBook.push(action.data);
      console.log("arr2", arrayBook);
      return { books: arrayBook };
    default:
      throw new Error();
  }
};

export default cartReducer;
