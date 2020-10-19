import {CHANGE_SEARCH_FIELD} from "./constants";
import {default} from "react-redux/lib/utils/Subscription";

const initialState = {
    searchField: ''
}

export const searchRobots = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, searchField: action.payload};
        default:
            return state
    }
}