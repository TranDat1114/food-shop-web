
// import axios from "axios";
// import { createContext, ReactNode, useContext, useEffect, useState } from "react";


// const SingletonContext = createContext<SingletonContextType | undefined>(undefined);

// const useSingleton = (): SingletonContextType => {
//     const context = useContext(SingletonContext);
//     if (!context) {
//         throw new Error('useAuth must be used within an AuthProvider');
//     }
//     return context;
// };

// interface SingleProviderProps {
//     children: ReactNode;
// }
// const SingletonProvider: React.FC<SingleProviderProps> = ({ children }) => {

//     useEffect(() => {
        

//     }, []);
//     return (
//         <SingletonContext.Provider value={{  }}>
//             {children}
//         </SingletonContext.Provider>
//     );
// }

// // eslint-disable-next-line react-refresh/only-export-components
// export { SingletonProvider, useSingleton };