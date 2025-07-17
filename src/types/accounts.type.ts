type AccountType = 'local' | 'ldap'

export interface Account {
    id: number,
    label?: string,
    type: AccountType,
    login: string,
    password: string | null
}

export interface StoredAccount extends Omit<Account, 'label'> {
    label: Array<{ text: string }>
}