import { Dispatch, SetStateAction } from "react";
import { BlocksType, TransactionsType } from "./redux.types";
export interface StampProps {
    icon: JSX.Element,
    title: string,
    value: string,
}

export interface TypeProps {
    type: TypeEnum
}

export enum TypeEnum {
    PENDING,
    CANCELLED,
    SUCCESS
}

export interface NavLinkProps {
    href: string,
    label: string,
    icon: JSX.Element,
    disabled: boolean,
}

export interface SearchInputProps {
    value: string;
    clearValue?: (name: string) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TopBarProps {
    formdata: any,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    clearValue: (name: string) => void;
    value: string

}

export interface StatsProps {
    title: string
    value: string
}

export interface DropDownProps {
    options: OptionsType[]
    value: string
    label: string
    setValue: (a: OptionsType, b: string) => void
    name: string
    disabled?: boolean
}

export type OptionsType = {
    value: string | number
    label: string
}

export interface ButtonProps {
    text: string
    onClick: () => void
    disabled?: boolean
    loading?: boolean
}

export enum IconDir {
    LEFT,
    RIGHT
}
export interface TransactionProps {
    loading: boolean
    transactions: TransactionsType[]
    filteredTransactions: TransactionsType[]
}

export interface BlockProps {
    loading: boolean
    blocks: BlocksType[]
    filteredBlocks: BlocksType[]
}

export interface NotificationProps {
    message: string
    show: boolean
    setShow: Dispatch<SetStateAction<boolean>>
}