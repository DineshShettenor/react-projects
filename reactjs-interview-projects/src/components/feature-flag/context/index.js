import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});

    const fetchFetureFlgs = async () => {
        try {
            setLoading(true)
            //  original service call
            const response = await featureFlagsDataServiceCall();
            console.log(response);
            setEnabledFlags(response);
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false);
            throw new Error(error);
            
        }
    }

    useEffect(() => {
      fetchFetureFlgs()
    }, [])
    
  return (
    <FeatureFlagContext.Provider value={{loading, enabledFlags}}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
