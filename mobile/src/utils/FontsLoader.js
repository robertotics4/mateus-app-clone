import React from 'react';
import { useFonts } from '@use-expo/font';

export default function FontsLoader() {
    return [fontsLoaded] = useFonts({
        'Bariol-Light': require('../../assets/fonts/Bariol-Light.ttf'),
        'Bariol-Regular': require('../../assets/fonts/Bariol-Regular.ttf'),
        'Bariol-Bold': require('../../assets/fonts/Bariol-Bold.ttf'),
    });
}
