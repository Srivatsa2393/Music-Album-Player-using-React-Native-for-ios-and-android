import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Hello from './Hello';
import Header from './src/components/header';

export default class App extends React.Component {
  render() {
    return(
      <Header headerText={'Albums'}/>
    );
  }
}



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
// });

// //App.js- Place code here for android
//
// //import a library to help create a Component
// import React frpm 'react';
// import { Text, AppRegistry } from 'react-native';
//
// //Create a Component
// const App = () => {
//   return(
//     <Text>Some Text</Text>
//   );
// };
//
// //Render it to a device
// AppRegistry.registerComponent('albums', () => App);
