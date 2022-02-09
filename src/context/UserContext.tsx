import {
    createContext,
    ReactElement,
    useState,
    Dispatch,
    SetStateAction,
} from "react";

type Login = {
    jwt: string;
    setJWT: Dispatch<SetStateAction<string>>;
};

const Context = createContext<Login>({ jwt: "", setJWT: () => "" });

// type ContextProps = {
//     children: ReactElement;
// };

// const UserContextProvider = ({ children }: ContextProps) => {

//     return (
//         <Context.Provider
//             value={{
//                 jwt,
//                 setJWT,
//             }}
//         >
//             {children}
//         </Context.Provider>
//     );
// };

export { Context };
