type AccountType = 'Локальная' | 'LDAP'

export interface Account {
    id: number,
    label?: string,
    type: AccountType,
    login: string,
    password: string
}

export interface StoredAccount extends Omit<Account, 'label'> {
    label: Array<{ text: string }>
}