import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
const Context = React.createContext({});
const Provider =({ children }) => {
const [state, runMyReducer] = useReducer(reducer, initialState);


return <Context.Provider value={{ state }}>
    {children}
</Context.Provider>
}
};