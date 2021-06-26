import React from 'react';
import {ImageBackground } from 'react-native';

import Images from '../../Config/Images';

const Loading = () => {
    return (
        <ImageBackground source={Images.LOADING} style={{ width: '100%', height: '100%' }}>
        </ImageBackground>
    );
}

export default Loading;