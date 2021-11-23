<template>
    <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">
        {{ errors }}
    </div>

    <form class="space-y-6" @submit.prevent="savePayments">
        <div class="space-y-4 rounded-md shadow-sm">
            <div>
                <label for="sum" class="block text-sm font-medium text-gray-700">Сумма</label>
                <div class="mt-1">
                    <input type="text" name="sum" id="sum"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="form.sum">
                </div>
            </div>

            <div>
                <label for="date" class="block text-sm font-medium text-gray-700">Дата</label>
                <div class="mt-1">
                    <input type="text" name="date" id="date"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="form.date">
                </div>
            </div>
        </div>

        <button type="submit"
                class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25">
            Сохранить платеж
        </button>
    </form>
</template>

<script>
import useUsers from '../../composables/users'
import { reactive } from 'vue'

export default {
    props: {
        id: {
            required: true,
            type: String
        }
    },
    setup(props) {
        const form = reactive({
            sum: '',
            date: '',
        })

        const { errors, storePayments } = useUsers()

        const savePayments = async () => {
            await storePayments({ ...form}, props.id)
        }

        return {
            form,
            errors,
            savePayments
        }
    }
}
</script>
