import { GET_BLOG } from "../actionTypes"

const initState={
    blogs:[]
}

export const blogReducer=(state=initState,action)=>{
    switch(action.type){
case GET_BLOG:
    return{
      ...state,
        blogs:action.payload
    }
    default:
        return state
}
}