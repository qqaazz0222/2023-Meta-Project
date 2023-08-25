import React, { createContext } from "react";

const UserContext = createContext({
    userData: {
        email: "",
        name: "",
    },
    setUserData: () => {},
});

export { UserContext };
