<script setup lang="ts">
import { useSettings } from '@/composables/useSettings'
import { useNotifications } from '@/composables/useNotifications';
const { privacy } = useSettings()
const { addNotification } = useNotifications()
const handleSave = () => {
    addNotification(`Privacy settings were saved successfully`)
    localStorage.setItem('privacy', JSON.stringify(privacy.value))
}
</script>

<template>
    <div>
        <h2 class="text-2xl mb-4">Privacy</h2>
        <form class="space-y-4 mx-auto" @submit.prevent="handleSave">
            <div class="flex items-center gap-1">
                <input type="checkbox" name='search-engine' v-model="privacy.searchEngine" />
                <label name="search-engine">Search engine indexing</label>
            </div>
            <div>
                <label class="mb-1" for="visibility">Visibility</label>
                <select name="visibility" v-model="privacy.visibility">
                    <option value="private">Private</option>
                    <option value="public">Public</option>
                </select>
            </div>
            <button type="submit" class="btn-primary">Save</button>
        </form>
    </div>
</template>
