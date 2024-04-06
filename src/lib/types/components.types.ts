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