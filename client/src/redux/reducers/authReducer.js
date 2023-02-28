import { GET_AUTH_USER, GET_USERS, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../actionTypes"

const initState={
    token:null,
    user:null,
    isAuth:false,
    msg:null,
    users:null,
}
export const authReducer=(state=initState,action)=>{
    switch(action.type){
        case REGISTER_USER:
            case LOGIN_USER:
            localStorage.setItem("token",action.payload.token)
            return{
                ...state,
                isAuth:true,
                user:action.payload.user,
                msg:action.payload.msg

            }
            case GET_AUTH_USER:
                return{
                    ...state,
                    isAuth:true,
                    user:action.payload.user
                }
                case LOGOUT_USER:
                    localStorage.removeItem("token")
                    return{
                        ...state,
                        isAuth:false,
                        user:null,
                        msg:null


                    }
                    case GET_USERS:
    return{
      ...state,
        users:action.payload
    }
              
                default :
                return state

    }
}