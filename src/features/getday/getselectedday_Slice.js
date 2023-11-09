import { createSlice } from "@reduxjs/toolkit";


const initialState={
    s_day:[]
}

export const Selected_day= createSlice({
    name: 'dayy',
    initialState,
    reducers:{
        get_day :(state,action) =>{
            const day=action.payload
            state.s_day=day
        },
    }
})


export const {get_day}=Selected_day.actions

export default Selected_day.reducer