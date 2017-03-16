/**
 * Created by Eldridge on 3/14/2017.
 */
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/actions.js'
import FilterButton from '../components/FilterButton'


const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        }
    }
};

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps

)(FilterButton);

export default FilterLink