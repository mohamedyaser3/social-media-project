import { createContext, useState } from "react";


export const counterContext = createContext()

export default function CounterContextpovider({ children }) {
    const [count, setCount] = useState(10)
    return<>
    <counterContext.Provider value={{count, setCount}}>
        { children}
    </counterContext.Provider>
    </>
}
