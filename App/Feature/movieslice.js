import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
export const getMovies =  createAsyncThunk("posts/getPosts", async (inputValue, pageno) =>{
    return fetch(`http://www.omdbapi.com/?s='${inputValue}'&page=${pageno}&apikey=4512232e`).then((res) => 
    res.json().then((res) => console.log(res))
    );
});

const movieSlice = createSlice(({
    name:"movies",
    initialState: {
        movies:[],
        loading: false
    },
    extraReducers:{
        [getMovies.pending]: (state) => {
            state.loading = true
        },
        [getMovies.fulfilled]: (state,action) => {
            state.loading = false;
            state.posts = action.payload
        },
        [getMovies.rejected]: (state) => {
            state.loading = false
        },
    }
}))

export default movieSlice.reducer