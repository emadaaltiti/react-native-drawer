import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from "react-native-vector-icons/FontAwesome";



class FBLoginView extends Component {
    static contextTypes = {
      isLoggedIn: PropTypes.bool,
      login: PropTypes.func,
      logout: PropTypes.func,
      props: PropTypes.shape({})
      };
  
    constructor(props) {
        super(props);
      }
  
      render(){
          return (
            <View style={[]}>
              <Icon.Button onPress={() => {
                  if(!this.context.isLoggedIn){
                    this.context.login()
                  }else{
                    this.context.logout()
                  }
  
                }}
                color={"#000000"}
                backgroundColor={"#ffffff"} name={"facebook"}  size={20} borderRadius={100} >
  
              </Icon.Button>
            </View>
        )
      }
  }
   export default FBLoginView ;