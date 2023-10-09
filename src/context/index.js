import React from "react";

const Context = React.createContext();

export const AppStore = (props) => {
  const [appStore, setAppStore] = React.useState({
    open: false,
    messName: "",
    messText: "", 
  });

  return (
    <Context.Provider value={{ appStore, setAppStore }}>
      {props.children}
    </Context.Provider>
  );
};

export default Context;
