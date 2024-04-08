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
    clearValue: (name: string) => void;
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