import React from 'react';
import {StyleSheet} from 'react-native'
import { View, Button, Text } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import {getAsteroidById, getRandomAsteroid} from '../services/http';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            asteroidId: ''
        };
    }

    changeText = (text) => {
        this.setState({
            asteroidId: text
        });
    }

    getAsteroidById = async () => {
        const data = await getAsteroidById(this.state.asteroidId);
        if(data) {
            this.props.setAsteroidData(data);
            Actions.asteroid();
        } else {
            alert("Wrong Asteroid ID");
        }
    }

    getRandomAsteroid = async () => {
        const asteroidsList = await getRandomAsteroid();
        console.log(asteroidsList);
        const randomAsteroid = asteroidsList.data.near_earth_objects[Math.ceil(Math.random() * 20)];
        console.log(randomAsteroid);
        this.props.setAsteroidData({data: randomAsteroid});
        Actions.asteroid();
    }

    render () {
        return (
            <View style={style.main}>
                <TextInput style={style.input} onChangeText={this.changeText}/>
                <View style={style.buttonGroup}>
                    <Button style={style.button} onPress={this.getAsteroidById} disabled={!this.state.asteroidId}>
                        <Text>Get asteroid</Text>
                    </Button>
                    <Button style={style.button} onPress={this.getRandomAsteroid}>
                        <Text>Get random asteroid</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
    },
    input: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "black",
    },
    buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    button: {
        marginBottom: 10
    }
})

export default MainPage;