import { TypeEnum } from "./components.types"

export interface DashState {
    transactions: TransactionsType[] | [],
    blocks: BlocksType[] | [],
    blocksOffset: number,
    transOffset: number,
    loading: boolean,
    success: boolean,
    error: boolean,
    message: string,
    filteredTransactions: TransactionsType[] | []
    filteredBlocks: BlocksType[] | []
    params: any;
}


export interface TransactionsType {
    type: TypeEnum
    wallet: string
    value: number
    from: string
    to: string
    amount: string
    time: string
    fee: number
}

export interface BlocksType {
    number: number
    amount: number
    difficulty: number
    bloom: string
    hash: string
    tx_count: number
    gas_used: number
    gas_limit: number
    time: string
}