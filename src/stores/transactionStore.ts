import { defineStore } from 'pinia'

interface Transaction {
    amount: number,
    date: string,
    description: string,
    from: string,
    id: string,
    status: string,
    title: string,
    to: string
}

const useTransactionStore = defineStore('transactionStore', {
    state: () => ({
        visibleTransactions: [] as Transaction[],
        allTransactions: [] as Transaction[]
    }),
    getters: {

    },
    actions: {
        init() {
            fetch('https://warren-transactions-api.herokuapp.com/api/transactions')
                .then(res => res.json())
                .then(data => data.forEach((el: Transaction) => this.allTransactions.push(el)))
            this.visibleTransactions = this.allTransactions
        },
        filterTransactions(str: string, status: string) {
            if(!str && status === "") {
                this.visibleTransactions = this.allTransactions
            } else if(!str && status) {
                this.visibleTransactions = this.allTransactions.filter((tr: Transaction) => { return tr.status === status })
            } else if(str && status === "") {
                this.visibleTransactions = this.allTransactions.filter((tr: Transaction) => { return tr.title.toLowerCase().includes(str.toLowerCase()) })
            } else {
                this.visibleTransactions = this.allTransactions.filter((tr: Transaction) => { return tr.title.toLowerCase().includes(str.toLowerCase()) && tr.status === status })
            }
        }
    }
})

export default useTransactionStore