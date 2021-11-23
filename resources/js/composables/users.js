import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function useUsers() {
    const user = ref([])
    const users = ref([])
    const payments = ref([])

    const errors = ref('')
    const router = useRouter()

    const getUsers = async () => {
        let response = await axios.get('/api/users')
        users.value = response.data.data
    }

    const getUser = async (id) => {
        let response = await axios.get(`/api/users/${id}`)
        user.value = response.data.data
    }

    const getPayments = async (id) => {
        let response = await axios.get(`/api/users/${id}/payments`)
        payments.value = response.data.data
    }

    const storePayments = async (data, id) => {
        errors.value = ''
        try {
            await axios.post(`/api/users/${id}/payments/create`, data)
            await router.push({ name: 'users.payments.index' })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const destroyUser = async (id) => {
        await axios.delete(`/api/users/${id}`)
    }

    const storeUser = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/users', data)
            await router.push({ name: 'users.index' })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const updateUser = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`/api/users/${id}`, user.value)
            await router.push({ name: 'users.index' })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    return {
        errors,
        user,
        users,
        payments,
        getUser,
        getUsers,
        storeUser,
        updateUser,
        destroyUser,
        getPayments,
        storePayments
    }
}
