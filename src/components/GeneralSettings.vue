<script setup lang='ts'>
import { useSettings } from '@/composables/useSettings'
import { useNotifications } from '@/composables/useNotifications'
const { general } = useSettings()
const { addNotification } = useNotifications()
const handleSave = () => {
    addNotification(`General settings were saved successfully`)
    localStorage.setItem('general', JSON.stringify(general.value))
}
</script>

<template>
    <div>
        <h2 class="text-2xl mb-4">General</h2>
        <form class="space-y-4 mx-auto" @submit.prevent="handleSave">
            <div>
                <label for="username">Username</label>
                <input type="text" name="username" v-model="general.username" />
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" name="email" v-model="general.email" />
            </div>
            <div>
                <label for="about">About Me</label>
                <textarea name="about" v-model="general.about"></textarea>
            </div>
            <div>
                <label for="gender">Gender</label>
                <label>
                    <input type="radio" name="gender" value="male" v-model="general.gender" />
                    <span>Male</span>
                </label>
                <label>
                    <input type="radio" name="gender" value="female" v-model="general.gender" />
                    <span>Female</span>
                </label>
                <label>
                    <input type="radio" name="gender" value="other" v-model="general.gender" />
                    <span>Other</span>
                </label>
            </div>
            <div>
                <label for="country">Country</label>
                <select name="country" v-model="general.country">
                    <option>USA</option>
                    <option>Canada</option>
                    <option>UK</option>
                </select>
            </div>
            <button type="submit" class="btn-primary">Save</button>
        </form>
    </div>
</template>