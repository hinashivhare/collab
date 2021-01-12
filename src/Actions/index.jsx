import axios from "axios";

export const fetchUser = (pageNo = 1) => async (dispatch) => {
    const response = await axios.get(`https://reqres.in/api/users?page=${pageNo}`);
    dispatch({
        type: 'FETCH_USERS',
        payload: response.data.data
    })
}

export const fetchPageData = () => async (dispatch) => {
    const response = await axios.get('https://reqres.in/api/users?page=1');
    dispatch({
        type: 'FETCH_PAGE_DATA',
        payload: {
            pageCount: response.data.total_pages,
            perPage: response.data.per_page,
            totalCount: response.data.total
        }
    })
}

export const EditDetails = (values) => {
    return async (dispatch) => {
        const response = await axios.put(`https://reqres.in/api/users/${values.id}`,{
            email: values.email,
            first_name: values.first_name,
            last_name: values.last_name,
            avatar: values.avatar
        })
        dispatch({
            type: "EDIT_USERS_DATA",
            payload: {
               data: response.data,
                id: values.id
            }
        })
    }
}

export const DeleteUser = (id) => {
    return async (dispatch) => {
        const response = await axios.delete(`https://reqres.in/api/users/${id}`)
        dispatch({
            type: "DELETE_USER",
            payload: id
        })
    }
}