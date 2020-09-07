import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,ActivityIndicator,FlatList, View, TextInput } from 'react-native';
import textbox from './components/TextView'
export default class App extends React.Component{
  constructor(props) {
      super(props);
  
      this.state = {
        "data_response":[],
        "isDataPresent": false
      };
    }
   async componentDidMount() {
      console.log('Eneted')
      const apiUrl = 'http://localhost:8000/showriders/?format=json';
    fetch(apiUrl, 
      {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }}).then((param)=>{
        console.log(param)
        return param.json()
      }).then((p)=>{
        const dict=JSON.stringify(p)
        const json_data=JSON.parse(dict)
        console.log(json_data.Rider_Data[0].RiderID)
        return json_data.Rider_Data
      }).then((data_json)=>{
        console.log("inside set")
        this.setState({
          "data_response":data_json,
          "isDataPresent": true
        })
        console.log(this.state.isDataPresent)
        console.log(this.state.data_response)})
      
      // const response_http= fetch(apiUrl);
      // const st=response_http.json()
      // console.log(st.PromiseResult.toString())
      // this.setState({
      //   data_response:st,
      //   isLoading: false
      // })
    }
      //.then((response=>{console.log(response.json());state.data=response.json()});
  
    render() {
      
      return (
        <View style = {styles.container}>
        <TextInput style = {styles.input}
           underlineColorAndroid = "transparent"
           type="number"
           placeholder = "Mobile number"
           placeholderTextColor = "#9a73ef"
           autoCapitalize = "none"
           //onChangeText = 
           />
             <TouchableOpacity
               style = {styles.submitButton}
              //  onPress = {
              //     () => this.login(this.state.email, this.state.password)
              //  }
              >
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
        </View>
              )
    }
  };
  const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   }
  }
  )
  