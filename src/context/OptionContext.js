import React, { useState } from "react";

const Context = React.createContext({});

export const OptionsContextProvider = ({children}) =>
{
    const [option, setOption] = useState("patient");
    const [action, setAction] = useState("edit");

    return (
        <Context.Provider value={{option, action, setOption, setAction}}>
            {children}
        </Context.Provider>
    );
}

export default Context;