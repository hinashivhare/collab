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