import React from 'react';
import { Text, View } from "react-native";
import { Provider } from 'react-redux';
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/es/integration/react";
import { LayAnh } from "./selectedImage";
import { Header } from './header';

const App = () => {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <View style={{flex: 1, padding: 10}}>
       <Header/>
       <LayAnh/>
     </View>
    </PersistGate>
  </Provider>
  );
};

export default App;