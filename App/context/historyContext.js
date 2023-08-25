import React, { createContext } from "react";

const HistoryContext = createContext({
    historyData: {
        dataType: "",
        date: "",
        email: "",
        id: "",
    },
    setHistoryData: () => {},
});

export { HistoryContext };
