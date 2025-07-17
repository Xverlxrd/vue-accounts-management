import {ref, watch} from "vue";
import {defineStore} from "pinia";
import type {Account} from "../types/accounts.type.ts";

export const useAccountsStore = defineStore('account', () => {
    const accounts = ref<Account[]>([])

    const loadFromStorage = () => {
        const saved = localStorage.getItem('accounts')
        if (saved) {
            accounts.value = JSON.parse(saved)
        }
    }

    watch(accounts, (newValue) => {
        localStorage.setItem('accounts', JSON.stringify(newValue))
    }, { deep: true })

    loadFromStorage()

    const addAccount = () => {
        accounts.value.push({
            id: Date.now(),
            label: '',
            type: 'Локальная',
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