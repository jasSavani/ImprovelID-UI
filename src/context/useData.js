import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import Storage from '@react-native-async-storage/async-storage';
import { light, dark } from '../constants';

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true);
    const [theme, setTheme] = useState(dark);
    const [cardData, setCardData] = useState({});
    const [notificationCount, setnotificationCount] = useState("3");
    const [activescreen, setActivescreen] = useState("Home");


    const cleanContext = () => {
    };
    // get isDark mode from storage
    const getIsDark = useCallback(async () => {
        // get preferance gtom storage
        const isDarkJSON = await Storage.getItem('isDark');

        if (isDarkJSON !== null) {
            // set isDark / compare if has updated
            setIsDark(JSON.parse(isDarkJSON));
        }
    }, [setIsDark]);

    // handle isDark mode
    const handleIsDark = useCallback(
        (payload) => {
            // set isDark / compare if has updated
            setIsDark(payload);
            // save preferance to storage
            Storage.setItem('isDark', JSON.stringify(payload));
        },
        [setIsDark],
    );
    // get initial data for: isDark & language
    useEffect(() => {
        getIsDark();
    }, [getIsDark]);

    // change theme based on isDark updates
    useEffect(() => {
        setTheme(isDark ? dark : light);
    }, [isDark]);


    const value = {
        isDark,
        setIsDark,
        handleIsDark,
        cleanContext,
        theme,
        setTheme,
        cardData,
        setCardData,
        notificationCount,
        setnotificationCount,
        activescreen,
        setActivescreen
    };

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
export const useData = () => useContext(DataContext);
