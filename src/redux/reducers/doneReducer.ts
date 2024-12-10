import { ActionsType } from "../actions/doneAction";

export type DoneType = string | number;
const initialState = {
    done: [] as DoneType[]
}
type InitialStateType = typeof initialState

const doneReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch(action.type){
        case 'DONE_TASK': 
        return {
            ...state,
            done: state.done.includes(action.payload) ? state.done.filter(item => item !== action.payload) : [...state.done, action.payload]
        };
        default:
            return state;
    }
}
export default doneReducer;