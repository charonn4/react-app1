import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
   initialized: false
}

const appReducer = (state= initialState, action) =>{
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

// action creator
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})
// thunk creator
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(()=>{
        dispatch(initializedSuccess())
    })


}

export default appReducer