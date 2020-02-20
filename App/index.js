import React from 'react';
import { StatusBar } from 'react-native';
import Lottie from 'lottie-react-native';

import { SafeAreaView, BoxHelloWorld, Text, Image } from './style';
import Start from './images/start.json';

const App: () => React$Node = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <BoxHelloWorld>
                    <Lottie style={{ width: 400, height: 400 }} autoSize source={Start} autoPlay loop />
                    <Text>Getting Start</Text>
                </BoxHelloWorld>
            </SafeAreaView>
        </>
    );
};

export default App;
