import React from 'react';
import {StyleSheet} from 'react-native'
import { View, Text } from 'native-base';

class AsteriodPage extends React.Component {
    render () {
        console.log(this.props.asteroidData);
        const {
            name,
            nasa_jpl_url,
            is_potentially_hazardous_asteroid
        } = this.props.asteroidData.data;
        return (
            <View style={style.main}>
                <Text style={style.text}>{name}</Text>
                <Text style={style.text}>{nasa_jpl_url}</Text>
                <Text style={style.text}>{is_potentially_hazardous_asteroid ? 'Hazardous' : 'Not hazardous'}</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        fontSize: 18,
        marginBottom: 15,
    }
})

export default AsteriodPage;