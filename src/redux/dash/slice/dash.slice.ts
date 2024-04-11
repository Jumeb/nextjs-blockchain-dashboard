import { BlocksType, DashState, TransactionsType } from "@/lib/types/redux.types";
import { createSlice } from "@reduxjs/toolkit";
import { blocksService, transactionsService } from "../thunk/dash.thunk";
import { cleanBlocks, cleanTransaction } from "@/lib/utils/cleandata";


const initialState: DashState = {
    transactions: [],
    blocks: [],
    blocksOffset: 20,
    transOffset: 20,
    loading: false,
    success: false,
    error: false,
    message: '',
    filteredTransactions: [],
    filteredBlocks: [],
    params: {}
}

const dashSlice = createSlice({
    name: 'dashSlice',
    initialState,
    reducers: {
        resetState: state => {
            state.blocks = [];
            state.transactions = [];
            state.transOffset = 20;
            state.blocksOffset = 20;
            state.error = false;
            state.loading = false;
            state.message = '';
            state.params = {};
            state.filteredBlocks = [];
            state.filteredTransactions = [];
        },
        setBlockOffset: (state, { payload }) => {
            state.blocksOffset = payload;
        },
        setTransOffset: (state, { payload }) => {
            state.transOffset = payload;
        },
        resetNotifications: state => {
            state.error = false;
            state.success = false;
        },
        filterTransactions: (state, { payload }) => {
            let TRANS = [...payload?.transactions];
            state.params = payload;

            // Filtering using the string 
            if (
                payload.search !== null &&
                payload.search !== undefined &&
                payload.search !== "" &&
                payload.search.length > 1
            ) {
                TRANS = TRANS.filter((trans: TransactionsType) =>
                    trans.fee.toString().includes(payload.search.toLowerCase()) ||
                    trans.amount.toString().includes(payload.search.toLowerCase()) ||
                    trans.from.toLowerCase().includes(payload.search.toLowerCase()) ||
                    trans.to.toLowerCase().includes(payload.search.toLowerCase()) ||
                    trans.time.toLowerCase().includes(payload.search.toLowerCase()) ||
                    trans.value.toString().includes(payload.search.toLowerCase()) ||
                    trans.wallet.toLowerCase().includes(payload.search.toLowerCase())
                );
                state.filteredTransactions = [...TRANS];
            }

            state.filteredTransactions = [...TRANS]
        },
        filterBlocks: (state, { payload }) => {
            let BLOCKS = [...payload.blocks];
            state.params = payload;

            // Filtering using the string 
            if (
                payload.search !== null &&
                payload.search !== undefined &&
                payload.search !== "" &&
                payload.search.length > 1
            ) {
                BLOCKS = BLOCKS.filter((block: BlocksType) =>
                    block.bloom.toString().includes(payload.search.toLowerCase()) ||
                    block.amount.toString().includes(payload.search.toLowerCase()) ||
                    block.difficulty.toString().includes(payload.search.toLowerCase()) ||
                    block.gas_limit.toString().includes(payload.search.toLowerCase()) ||
                    block.time.toLowerCase().includes(payload.search.toLowerCase()) ||
                    block.gas_used.toString().includes(payload.search.toLowerCase()) ||
                    block.hash.toLowerCase().includes(payload.search.toLowerCase()) ||
                    block.number.toString().includes(payload.search.toLowerCase()) ||
                    block.tx_count.toString().includes(payload.search.toLowerCase())
                );
                state.filteredBlocks = [...BLOCKS];
            }

            state.filteredBlocks = [...BLOCKS]
        }
    },
    extraReducers: builder => {
        builder.addCase(transactionsService.pending, (state) => {
            state.loading = true;
            state.error = false;
            state.success = false;
        }).addCase(transactionsService.rejected, (state) => {
            state.loading = false;
            state.error = true;
            state.success = false;
            state.message = 'An error occured'
        }).addCase(transactionsService.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.error = false;
            state.success = true;
            state.message = 'success'
            state.transactions = cleanTransaction(payload);
            state.filteredTransactions = cleanTransaction(payload);
        }).addCase(blocksService.pending, (state) => {
            state.loading = true;
            state.error = false;
            state.success = false;
        }).addCase(blocksService.rejected, (state) => {
            state.loading = false;
            state.error = true;
            state.success = false;
            state.message = 'An error occured'
        }).addCase(blocksService.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.error = false;
            state.success = true;
            state.message = 'success'
            state.blocks = cleanBlocks(payload);
            state.filteredBlocks = cleanBlocks(payload);
        })
    }
})

export const { resetState, resetNotifications, setBlockOffset, setTransOffset, filterBlocks, filterTransactions } = dashSlice.actions;
export default dashSlice.reducer;