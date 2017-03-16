/**
 * Created by Eldridge on 3/14/2017.
 */
import React, {PropTypes} from 'react'
import {Button, View} from 'react-native'

class FilterButton extends React.Component {

    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <View style={{flex:1, padding:5}}>
            <Button title={this.props.children} onPress={this.props.onClick}  color={this.props.active ? "green" : "#841584"}/>
            </View>
        )
    }

}

FilterButton.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default FilterButton