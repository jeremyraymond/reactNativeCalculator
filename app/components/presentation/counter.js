import React from 'react'
import { View, Button, Text } from 'react-native'
import PropTypes from 'prop-types'

const Counter = ({ changeCountClick, count }) => (
    <View>
        <Button
            onPress={(e) => changeCountClick(-1)}
            title="-1"
        />
        <Text>Count: {count}</Text>
        <Button
            onPress={(e) => changeCountClick(1)}
            title="+1"
        />
    </View>
);

Counter.propTypes = {
    changeCountClick: PropTypes.func.isRequired,
    count:    PropTypes.number.isRequired
};

export default Counter;