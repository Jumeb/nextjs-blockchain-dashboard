import DashService from "@/services/workers/dash.services";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const transactionsService = createAsyncThunk(
    'get/transactions',
    async (data: string, thunkAPI) => {
        try {
            return await new DashService().transactionService(data)
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const blocksService = createAsyncThunk(
    'get/blocks',
    async (data: string, thunkAPI) => {
        try {
            return await new DashService().blockService(data)
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)