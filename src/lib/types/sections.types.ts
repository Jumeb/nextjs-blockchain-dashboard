import { BlocksType, TransactionsType } from "./redux.types";

export interface TransBlockProps {
    transactions: TransactionsType[]
    blocks: BlocksType[]
}