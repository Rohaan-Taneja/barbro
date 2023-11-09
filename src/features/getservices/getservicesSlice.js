import { createSlice } from "@reduxjs/toolkit";


const initialState={
    s_s:[]
}

export const Selected_Services_List= createSlice({
    name: 'services',
    initialState,
    reducers:{
        get_Services :(state,action) =>{
            const servicelist=
                action.payload
            state.s_s=servicelist
        },
    }
})


export const {get_Services}=Selected_Services_List.actions

export default Selected_Services_List.reducer