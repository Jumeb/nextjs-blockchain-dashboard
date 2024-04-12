import { BlocksType, TransactionsType } from "../types/redux.types"
import { TypeEnum } from "../types/components.types";
import moment from "moment";

export const formatNumber = (num: number): string => {
    const suffixes = ['', 'k', 'm', 'b', 't', 'q', 'Q', 's', 'S', 'o', 'n', 'd', 'U', 'D', 'T', 'Qt', 'Qd', 'Sd', 'St', 'O', 'N', 'V', 'Uv', 'Dv', 'Tv', 'Qtv', 'Qdv', 'Sdv', 'Stv', 'Ov', 'Nv', 'Vg', 'Uvg', 'Dvg', 'Tvg', 'Qtv', 'Qdv', 'Sdv', 'Stv', 'Ov', 'Nv', 'Tg', 'Utg', 'Dtg', 'Ttg', 'Qag', 'Qag', 'Sag', 'Stg', 'Otg', 'Ntg']
    let absNum = Math.abs(num);
    const sign = num < 0 ? '-' : '';
    let index = 0;

    while (absNum >= 1000 && index < suffixes.length - 1) {
        absNum /= 1000;
        index++;
    }

    const formattedNum = absNum.toFixed(2).replace(/\.?0+$/, '');
    return `${sign}${formattedNum}${suffixes[index]}`;
}

export const cleanTransaction = (data: any): TransactionsType[] => {
    let _data: TransactionsType[] = [];
    data?.data?.EVM?.Transactions.map((datum: any) => _data.push({ type: getType(datum?.Transaction?.Type), wallet: datum?.Transaction?.ToCode?.Hash, value: Number(Math.floor(datum?.Transaction.Value).toFixed(4)), to: datum?.Transaction?.To, from: datum?.Transaction?.From, time: datum?.Block.Time, fee: Number(Math.floor(datum?.Fee?.SenderFee).toFixed(4)), amount: Math.floor(datum?.Transaction?.Cost).toFixed(4) }))
    return _data;
}

export const cleanBlocks = (data: any): BlocksType[] => {
    let _data: BlocksType[] = [];
    data?.data?.EVM?.Blocks.map((datum: any) => _data.push({ number: datum?.Block.Number, gas_used: datum?.Block.GasUsed, gas_limit: datum?.Block.GasLimit, hash: datum?.Block.Hash, tx_count: datum?.Block.TxCount, difficulty: datum?.Block.Difficulty, time: datum?.Block.Time, bloom: datum?.Block.Bloom, amount: formatNumber(datum?.Block.Hash) }))
    return _data
}

export const shortenData = (data: string, length = 8) => {
    return data.substring(1, length) + '...' + data.substring(data.length - length);
}

export const getType = (number: number) => {
    return number === 0 ? TypeEnum.CANCELLED : number === 2 ? TypeEnum.SUCCESS : TypeEnum.PENDING
}


export const groupBlocksByTime = (blocks: BlocksType[]) => {
    const groupedBlocks: { [key: string]: number } = {};
    const groupedTransaction: { [key: string]: number } = {};

    let sortedBlocks = blocks?.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());

    let currentGroup: string | null = null;
    let groupCount = 0;

    for (const block of sortedBlocks) {
        const blockTime = new Date(block.time);
        const blockTimeString = blockTime.toISOString().slice(0, 16); // Group by hour and minute

        if (currentGroup === null || blockTimeString !== currentGroup) {
            if (groupCount === 6) {
                // If there are already 6 groups, stop grouping
                break;
            }

            currentGroup = blockTimeString;
            groupCount++;
            groupedBlocks[currentGroup] = block.tx_count;
            groupedTransaction[currentGroup] = 1;
        } else {
            groupedBlocks[currentGroup] += block.tx_count;
            groupedTransaction[currentGroup] += 1;
        }
    }

    let _labels: string[] = []
    Object.keys(groupedBlocks).map((key) => _labels.push(moment(key).format('hh:mm')))

    const _trans = {
        labels: [..._labels],
        datasets: [
            {
                label: 'Transactions data',
                data: [...Object.values(groupedBlocks)],
                fill: false,
                backgroundColor: 'transparent',
                borderColor: '#077a8f',
                tension: 0.4,
            },
        ]
    }

    _labels = []
    Object.keys(groupedTransaction).map((key) => _labels.push(moment(key).format('hh:mm')))

    const _blocks = {
        labels: [..._labels],
        datasets: [
            {
                label: 'Blocks data',
                data: [...Object.values(groupedTransaction)],
                fill: false,
                backgroundColor: 'transparent',
                borderColor: '#077a8f',
                tension: 0.4,
            },
        ]
    }

    return [_blocks, _trans];

}

export const sumData = (data: number[]) => {
    let sum = data.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0);

    return sum;
}

