import { createSlice } from "@reduxjs/toolkit";


const initialState={
    s_slots:[]
}

export const Selected_Slot= createSlice({
    name: 'slots',
    initialState,
    reducers:{
        get_Slots :(state,action) =>{
            const selected_Slots=
                action.payload
            state.s_slots=selected_Slots
        },
    }
})


export const {get_Slots}=Selected_Slot.actions

export default Selected_Slot.reducer