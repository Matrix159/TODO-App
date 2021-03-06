import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/actions.js'
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false,
                    id: state.length
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return { ...todo,
                        completed: !todo.completed
                    };
                }
                return todo
            });
        default:
            return state
    }
}

const reducer = combineReducers({
    visibilityFilter,
    todos
});

export default reducer;