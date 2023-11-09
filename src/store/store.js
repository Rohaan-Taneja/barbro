import { configureStore } from "@reduxjs/toolkit";
import get_day  from "../features/getday/getselectedday_Slice";
import getservicesSlice from "../features/getservices/getservicesSlice";
import getslot_Slice from "../features/getslot/getslot_Slice";

export const store = configureStore({
  reducer:{
    service:getservicesSlice,
    slot:getslot_Slice,
    dayy:get_day,
  }
});
