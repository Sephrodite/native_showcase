import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import * as Location from 'expo-location';
import { isWithinRadius } from '../Components/LocationCheck';

const MAIN_HALL = {
    latitude: 60.23706, // Example latitude
    longitude: 24.8814, // Example longitude
};

export default function Screen1() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [hasArrived, setHasArrived] = useState(false);

    useEffect(() => {
        (async () => {
            // Request permission to access location
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            // Get the current location
            const loc = await Location.getCurrentPositionAsync({});
            setLocation(loc)
            const { latitude, longitude } = loc.coords;
            const closeEnough = isWithinRadius(
                latitude,
                longitude,
                MAIN_HALL.latitude,
                MAIN_HALL.longitude,
                100 // 100 meters radius
            );

            setHasArrived(closeEnough);
        })();
    }, []);


    return (
        <>
            <View>
                {errorMsg && <Text>{errorMsg}</Text>}
                {location && (
                    <Text>
                        Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
                    </Text>
                )}
            </View>
            <View>
                {hasArrived ? (
                    <Text>🎉 Welcome to the Main Hall! Quest Unlocked! 🎉</Text>
                ) : (
                    <Text>Explore around to find special content!</Text>
                )}
            </View>

        </>

    );
}