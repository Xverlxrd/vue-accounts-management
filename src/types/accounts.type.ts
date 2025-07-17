type AccountsType = 'Локальная' | 'LDAP'

export interface Account {
    id: number,
    label?: string,
    type: AccountsType,
    login: string,
    password: string
}