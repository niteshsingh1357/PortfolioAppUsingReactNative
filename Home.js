import React, {Component} from 'react';
import {View, 
	Text, 
	Image,
	StyleSheet,
	Dimensions,
	StatusBar} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default class Home extends Component {
	render() {
		return(
			<View style={styles.container}>
				<StatusBar
		           backgroundColor="#1A237E"
		           barStyle="light-content"
		        />

				<Text style={styles.title}>Home</Text>
				<Image
					style={styles.image}
					source={require('./img/mypic.jpg')}
				/>
				<Text 
				style={{alignSelf:'center', fontSize: 26, color: '#000', paddingTop:10}}>
					Nitesh Singh
				</Text>
				<Text
				style={{alignSelf:'center', fontSize: 18, color: '#0277BD'}}>
					Android Developer
				</Text>
				<Text style={{alignSelf:'center', justifyContent:'center', fontSize: 18, padding: 30, textAlign: 'center', lineHeight: 25}}>
					Hey! I am Nitesh Singh.  
					I am an IT enthusiast and have always wanted to be part of IT industry.
					Computer and Technnolgy fascinates me and makes me want to contribute in the field of Information Technology.
				</Text>
			</View>
		)
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#E0E0E0',
	},

	title: {
	    width: screenWidth,
	    backgroundColor: '#283593',
	    fontSize: 20,
	    alignSelf:'center',
	    justifyContent: 'center',
	    height: 50,
	    elevation: 5,
	    padding: 10,
	    color: '#FFFFFF',
	},

	image: {
		width: 150,
		height: 150,
		borderWidth: 10,
		padding: 10,
		marginTop: 20,
		alignSelf: 'center',
		borderColor: "white",
	}
});
