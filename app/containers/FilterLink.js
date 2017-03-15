/**
 * Created by Eldridge on 3/14/2017.
 */
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/actions.js'
<<<<<<< HEAD
import FilterButton from '../components/FilterButton'
=======
import Link from '../components/Link'
>>>>>>> origin/master

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
<<<<<<< HEAD
            console.log("Clicked");

            dispatch(setVisibilityFilter(ownProps.filter));
            console.log(store.getState());
=======
            dispatch(setVisibilityFilter(ownProps.filter))
>>>>>>> origin/master
        }
    }
};

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
<<<<<<< HEAD
)(FilterButton);
=======
)(Link);
>>>>>>> origin/master

export default FilterLink