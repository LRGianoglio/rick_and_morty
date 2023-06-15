import { act } from "react-dom/test-utils";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";

const initialState = {
    allFavorites : [],
    filteredFavorites: []
}

const reducer = (state = initialState, action) => { //action = {type:..., payload:...}
    switch (action.type){
        case ADD_FAV:
            return { ...state, myFavorites: payload, allCharacters: payload };
        case REMOVE_FAV:
            return { ...state, myFavorites: payload };
        case FILTER:
            return{
                ...state,
                filteredFavorites: state.allFavorites.filter(chara => chara.gender === action.payload)
            }
        case ORDER:
            let orderedFavorites = state.filteredFavorites.sort();
            if (action.payload === "D") orderedFavorites.reverse();
           return{
                ...state,
                filteredFavorites: orderedFavorites
            }
        default:
            return {...state}
    }
}

export default reducer;