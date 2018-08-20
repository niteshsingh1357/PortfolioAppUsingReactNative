import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Linking, Image, TouchableOpacity, StatusBar} from 'react-native';


//import {createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const screenWidth = Dimensions.get('window').width;

export default class Contact extends Component {

	 _pressCall=(num)=>{
    const url='tel:num'
    Linking.openURL(url)
  }

	render() {
		return(
			<View style={styles.container}>
				<StatusBar
		           backgroundColor="#1A237E"
		           barStyle="light-content"
		        />

				<Text style={styles.title}>Contacts</Text>

					<View style={styles.contactContainer}>
						
						<Text style={{fontSize:16, paddingLeft:10, paddingTop:10, color: '#212121',}}>Address:</Text>
						<View style={{flex:1, flexDirection:'row'}}>
				    		<Entypo name="address" color= 'grey' size={22} 
				    			style={{paddingLeft:10, paddingTop:10, paddingRight:5}}
				    		 />
					    	<Text style={{fontSize:16, color:'#212121', padding: 10, justifyContent:'center'}}>NavinTole, Brt-13, Nepal</Text>
					    </View>
					    <Text style={{fontSize:16, paddingLeft:10, paddingTop:10, color: '#212121',}}>Phone:</Text>
					    <View style={{flex:1, flexDirection:'row'}}>
					    	<TouchableOpacity
					    		activeOpacity={0.8}
					    		style={{flex:1, flexDirection:'row'}}
					    		onPress={() => Linking.openURL('tel:9842580134')}>
					    		<Ionicons name="ios-call" color= 'green' size={24} 
					    			style={{padding:10}}
					    		 />
						        <Text style={styles.text2}>9842580134</Text>
					        </TouchableOpacity>
					    </View>
					    <View style={styles.line}/>
					    <View style={{flex:1, flexDirection:'row'}}>
					    	<TouchableOpacity
					    		activeOpacity={0.8}
					    		style={{flex:1, flexDirection:'row'}}
					    		onPress={() => Linking.openURL('tel:9842580134')}>
					    		<Ionicons name="ios-call" color= 'green' size={24} 
					    			style={{padding:10}}
					    		 />
						        <Text style={styles.text2}>9867988165</Text>
					        </TouchableOpacity>
					    </View>
				    </View>

				    <View style={styles.socialContainer}>
				    	
				    	<View style={{flex:1, flexDirection:'row'}}>
				    		<TouchableOpacity
				    			activeOpacity={0.8}>
					    		<Ionicons name="logo-facebook" color= '#345291' size={40} 
					    			style={styles.iconBackground}
					    			onPress={() => Linking.openURL('http://facebook.com/nnitessh')} />
				    		</TouchableOpacity>
				    		<TouchableOpacity
				    			activeOpacity={0.8}
				    			onPress={() => Linking.openURL('mailto:niteshsingh1357@gmail.com?body=')}>
					    		<Image 
					    			source = {require('./img/gmail.png')}
					    			style={{width: 38, height: 38, padding: 10, marginTop: 12, marginRight:10, marginLeft:5}}
					    			 />
				     		</TouchableOpacity>
				    		<TouchableOpacity
					    		activeOpacity={0.8}>
					    		<Ionicons name="logo-linkedin" color= '#345291' size={40}
					    			style={styles.iconBackground}
					    			onPress={() => Linking.openURL('https://www.linkedin.com/in/nitesh-singh-0b9125154/')} />
				    		</TouchableOpacity>
				    		<TouchableOpacity
					    		activeOpacity={0.8}>
					    		<Ionicons name="logo-github" color='black' size={36}
					    			style={styles.iconBackground}
					    			onPress={() => Linking.openURL('https://github.com/niteshzeft/')} />
				    		</TouchableOpacity>
				    	</View>
				    </View>
			</View>

			
		)
	}
};

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		paddingLeft:10,
		paddingRight: 10,
		backgroundColor: '#E0E0E0'
	},

	title: {
	    width: screenWidth,
	    backgroundColor: '#283593',
	    alignSelf: 'stretch',
	    fontSize: 20,
	    alignSelf:'center',
	    justifyContent: 'center',
	    elevation: 5,
	    height: 50,
	    padding: 10,
	    color: '#FFFFFF',
	},

	contactContainer: {
	  	backgroundColor: 'white',
	  	height: 200,
	  	marginTop: 10,
	  	marginBottom: 10,
	  	paddingLeft: 10,
	  	width:screenWidth - 20,
	  	borderWidth: 1,
	  	borderColor: 'white',
	  	borderRadius: 3,
    },

    socialContainer: {
	  	backgroundColor: 'white',
	  	height: 60,
	  	marginTop: 20,
	  	marginBottom: 0,
	  	paddingLeft: 10,
	  	justifyContent: 'center',
	  	alignSelf: 'center',
	  	alignItems: 'center',
	  	width:screenWidth - 20,
	  	borderWidth: 1,
	  	borderColor: 'white',
	  	borderRadius: 3,
    },

	heading: {
	  	color: '#212121',
	  	fontSize: 16,
	  	paddingLeft: 10,
	  	paddingTop: 5,
	  	fontWeight: 'normal',
	},

	label: {
	  	color: '#212121',
	  	fontSize: 16,
	  	paddingLeft: 10,
	  	marginTop: 10,
    },

    text: {
	  	color: 'blue',
	  	fontSize: 16,
	  	paddingTop: 10,
	  	paddingLeft: 10,
	  	marginTop: 5,
	  	justifyContent: 'center',
	},

    text2: {
	  	color: '#212121',
	  	fontSize: 16,
	  	padding: 10,
	  	marginLeft:0,
	  	justifyContent: 'center',
    },

    line: {
	  	borderBottomColor: '#E0E0E0',
		borderBottomWidth: 1,
	    paddingLeft: 10,
		marginLeft: 45,
    },

    iconBackground: {
    	padding:10, 
    	justifyContent:'center',
    	alignItems: 'center',
    	alignSelf: 'center',
    	width:55,
    	height:55,
    	
    },
});
