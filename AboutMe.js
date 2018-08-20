import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet, Image, ScrollView, StatusBar} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default class AboutMe extends Component {
	render() {
		return(
			<View style={styles.container}>
        <StatusBar
           backgroundColor="#1A237E"
           barStyle="light-content"
        />

				<Text style={styles.title}>About Me</Text>
        
				<ScrollView showsHorizontalScrollIndicator={false} style={{width:screenWidth,}}>
        
				<View style={styles.imageContainer}>
					<Image
						style={styles.image}
						source={require('./img/mypic.jpg')}
					/>
					<Text style={styles.textName}>Nitesh Singh</Text>
				</View>

				<View style={styles.educationContainer}>
					<Text style={styles.heading}>
						Education
					</Text>
					<Text style={styles.label}>School:</Text>
					<Text style={styles.text}>Lord Buddha H. S. B. School</Text>
					
					<Text style={{fontSize:16, paddingLeft:10, paddingTop:10, color: '#212121',}}>College:</Text>
					<Text style={styles.text2}>Purwanchal Campus, Dharan (Diploma)</Text>
					<View style={styles.line}/>
					<Text style={styles.text2}>Himalaya Darshan College (Bachelor)</Text>
				</View>

				<View style={styles.skillsContainer}>
					<Text style={styles.heading}>Skills</Text>
					<Text style={styles.text2}>HTML</Text>
					<View style={styles.line}/>
					<Text style={styles.text2}>Basic CSS</Text>
					<View style={styles.line}/>
					<Text style={styles.text2}>Basic JavaScript</Text>
					<View style={styles.line}/>
					<Text style={styles.text2}>C Programming</Text>
					<View style={styles.line}/>
					<Text style={styles.text2}>C ++</Text>
					<View style={styles.line}/>
					<Text style={styles.text2}>Java</Text>
					<View style={styles.line}/>
					<Text style={styles.text2}>Android Development</Text>
					<View style={styles.line}/>
					<Text style={styles.text2}>React Native</Text>
				</View>
        


				</ScrollView>
        
			</View>
		)
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		paddingLeft:10,
		paddingRight: 10,
		backgroundColor: '#E0E0E0',
	},

	title: {
	    width: screenWidth,
	    backgroundColor: '#283593',
	    alignSelf: 'stretch',
	    fontSize: 20,
	    alignSelf:'center',
	    justifyContent: 'center',
	    height: 50,
      elevation: 5,
	    padding: 10,
	    color: '#FFFFFF',
	    
  },

  imageContainer: {
  	flex: 1,
  	flexDirection: 'row',
   	backgroundColor: 'white',
  	height: 80,
  	width:screenWidth -20 ,
  	padding: 10,
  	marginTop: 10,
  	borderRadius: 3,

  },

  textName: {
  	color: '#000000',
  	alignSelf:'center', 
  	justifyContent: 'center',
  	alignItems: 'center',
  	padding: 4, 
  	fontSize: 22,
  },

  educationContainer: {
  	backgroundColor: 'white',
  	height: 235,
  	marginTop: 10,
  	paddingLeft: 10,
  	width:screenWidth - 20,
  	borderWidth: 1,
  	borderColor: 'white',
  	borderRadius: 3,
  },

  skillsContainer: {
  	backgroundColor: 'white',
  	height: 390,
  	marginTop: 10,
  	marginBottom: 10,
  	paddingLeft: 10,
  	width:screenWidth - 20,
  	borderWidth: 1,
  	borderColor: 'white',
  	borderRadius: 3,
  },

  extraSkillContainer: {

  },

  image: {
  	width: 60, 
  	height: 60, 
  	borderRadius: 100,
  	marginLeft: 10,
  	marginRight: 20,
  }, 

  heading: {
  	color: '#212121',
  	fontSize: 20,
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
  	color: '#212121',
  	fontSize: 16,
  	paddingTop: 10,
  	paddingLeft: 10,
  	paddingBottom: 5,
  	justifyContent: 'center',
  },

  text2: {
  	color: '#212121',
  	fontSize: 16,
  	padding: 10,
  	justifyContent: 'center',
  },

  line: {
  	borderBottomColor: '#E0E0E0',
	borderBottomWidth: 1,
    padding: 0,
	marginLeft: 10,
  },
							    
});

