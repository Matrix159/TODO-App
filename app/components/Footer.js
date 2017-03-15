/**
 * Created by Eldridge on 3/14/2017.
 */
import React from 'react'
<<<<<<< HEAD
import {Text, View} from 'react-native'
=======
import {Text} from 'react-native'
>>>>>>> origin/master
import FilterLink from '../containers/FilterLink'

class Footer extends React.Component {
    render(){
<<<<<<< HEAD
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
=======
    return (<Text>
        Show:
        {" "}
        <FilterLink filter="SHOW_ALL">
            All
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_ACTIVE">
            Active
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_COMPLETED">
            Completed
        </FilterLink>
    </Text>);
>>>>>>> origin/master
    }
}


export default Footer