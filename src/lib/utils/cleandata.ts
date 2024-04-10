import moment from "moment";
import { BlocksType, TransactionsType } from "../types/redux.types"
import { TypeEnum } from "../types/components.types";

export const cleanTransaction = (data: any): TransactionsType[] => {
    let _data: TransactionsType[] = [];
    data?.data?.EVM?.Transactions.map((datum: any) => _data.push({ type: getType(datum?.Transaction?.Type), wallet: datum?.Transaction?.ToCode?.Hash, value: Number(Math.floor(datum?.Transaction.Value).toFixed(4)), to: datum?.Transaction?.To, from: datum?.Transaction?.From, time: moment(datum?.Block.Time).fromNow(), fee: Number(Math.floor(datum?.Fee?.SenderFee).toFixed(4)), amount: Math.floor(datum?.Transaction?.Cost).toFixed(4) }))
    return _data;
}

export const cleanBlocks = (data: any): BlocksType[] => {
    let _data: BlocksType[] = [];
    data?.data?.EVM?.Blocks.map((datum: any) => _data.push({ number: datum?.Block.Number, gas_used: datum?.Block.GasUsed, gas_limit: datum?.Block.GasLimit, hash: datum?.Block.Hash, tx_count: datum?.Block.TxCount, difficulty: datum?.Block.Difficulty, time: moment(datum?.Block.Time).fromNow(), bloom: datum?.Block.Bloom, amount: Number(Math.floor(datum?.Block.Hash).toFixed(4)) }))
    return _data
}

export const shortenData = (data: string, length = 8) => {
    return data.substring(1, length) + '...' + data.substring(data.length - length);
}

export const getType = (number: number) => {
    return number === 0 ? TypeEnum.CANCELLED : number === 2 ? TypeEnum.SUCCESS : TypeEnum.PENDING
}


