 import * as fromFilter from "./filter.actions";

 const initialState: fromFilter.filterAvailable = 'todos'
 
 export function filterReducer(state = initialState, action: fromFilter.actions): fromFilter.filterAvailable{
     switch (action.type) {
         case fromFilter.SET_FILTER:
            return action.filter
         default:
            return state
     }
 }