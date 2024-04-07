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