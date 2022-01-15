import React, { Component } from 'react';
import { View, StyleSheet, FlatList,Text, Image, TouchableOpacity,TextInput, Alert } from 'react-native';
import axios from "axios";
import { ScrollView } from 'react-native-gesture-handler';

export default class WelcomeScreen extends Component {
    constructor() {
        super();
        this.state = {
          orders: []
        };
      }
    
      componentDidMount() {
        this.getOrders();
      }
    
     
    
    getOrders = () => {
        const url = "https://61b6012ac95dd70017d40dcd.mockapi.io/api/V1/Pizza";
        axios
          .get(url)
          .then(response => {
            let details = response.data;
            console.log(details)
            this.setState({ orders: details });
          })
          .catch(error => {
            console.log(error.message);
          });
        }

    deleteOrder=()=>{
        const url = "https://61b6012ac95dd70017d40dcd.mockapi.io/api/V1/Pizza";
        
    }

render(){
    return(
        <View>
            <FlatList
          data={this.state.orders}
          renderItem={({item})=>(
            <View style={{borderBottomWidth: 2}}>
              <Text>{"Order Id: " + item.Order_ID}</Text>
              <Text>{"Size: " + item.Size}</Text>
              <Text>{"Flavour: " + item.Flavor}</Text>
              <Text>{"Crust: " + item.Crust}</Text>
              <TouchableOpacity onPress={this.deleteOrder}
              style={{backgroundColor:"red", width:100}}> <Text>cancel </Text></TouchableOpacity>
            </View>
          )}
        /> 
        </View>
    )
}
}