import {ref, watch} from "vue";
import {defineStore} from "pinia";
import type {Account, StoredAccount} from "../types/accounts.type.ts";

export const useAccountsStore = defineStore('account', () => {
    const accounts = ref<Account[]>([])

    const parseLabels = (labelString: string): Array<{ text: string }> => {
        if (!labelString) return []

        return labelString
            .split(';')
            .map(item => item.trim())
            .filter(item => item.length > 0)
            .map(text => ({text}))
    }

    const formatLabels = (labels: Array<{ text: string }>): string => {
        return labels.map(item => item.text).join('; ')
    }

    const loadFromStorage = () => {
        const saved = localStorage.getItem('accounts')
        if (saved) {
            try {
                const storedAccounts: StoredAccount[] = JSON.parse(saved)
                accounts.value = storedAccounts.map(account => ({
                    ...account,
                    label: formatLabels(account.label)
                }))
            } catch (e) {
                console.error('Failed to parse accounts from localStorage', e)
            }
        }
    }

    watch(accounts, (newValue) => {
        const accountsToStore: StoredAccount[] = newValue.map(account => ({
            ...account,
            label: parseLabels(account.label || '')
        }))
        localStorage.setItem('accounts', JSON.stringify(accountsToStore))
    }, {deep: true})

    loadFromStorage()

    const addAccount = () => {
        accounts.value.push({
            id: Date.now(),
            label: '',
            type: 'local',
            login: '',
            password: ''
        })
    }

    const removeAccount = (id: number) => {
        accounts.value = accounts.value.filter(account => account.id !== id)
    }

    return {
        accounts,
        addAccount,
        removeAccount
    }
})