import { fetchUser ,fetchPageData } from '../Actions'

const INITIAL_STATE = {
    pageCount: null,
    perPage: null,
    totalCount: null,
    users: []
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case 'FETCH_USERS' :
            return {...state, users: action.payload};
        case 'FETCH_PAGE_DATA':
            return {...state,
                pageCount: action.payload.pageCount,
                perPage: action.payload.perPage,
                totalCount: action.payload.totalCount
            };
        case "EDIT_USERS_DATA":
           let index = state.users.findIndex((user,index) => user.id === action.payload.id );
           const newUsers = [...state.users];
           newUsers[index] = action.payload.data;
            return {...state, users: newUsers }
        default:
            return state;
    }
}
