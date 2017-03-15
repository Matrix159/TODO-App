/**
 * Created by Eldridge on 3/14/2017.
 */
import React from 'react'
import {Text, View} from 'react-native'
import FilterLink from '../containers/FilterLink'

class Footer extends React.Component {
    render(){
    return (
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
        <FilterLink filter="SHOW_ALL">
            All
        </FilterLink>

        <FilterLink filter="SHOW_ACTIVE">
            Active
        </FilterLink>

        <FilterLink filter="SHOW_COMPLETED">
            Completed
        </FilterLink>
        </View>
    );
    }
}


export default Footer