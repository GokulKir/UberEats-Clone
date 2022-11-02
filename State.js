import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App';
import  store from './Redux/Store';

const Stack = createStackNavigator();

export default function State() {
    return (
        <StoreProvider store={store}>
             <App/>
        </StoreProvider>
    )
    
}