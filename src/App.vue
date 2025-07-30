<script setup lang="ts">

import { computed, ref } from 'vue';

import TabLink from '@/components/TabLink.vue'

import type { Tab, TabKey } from '@/types'

import GeneralSettings from '@/components/GeneralSettings.vue';
import NotificationsSettings from '@/components/NotificationsSettings.vue';
import PrivacySettings from '@/components/PrivacySettings.vue';
import NotificationList from '@/components/NotificationList.vue';

const tabs: Tab[] = [
    {
        key: 'general',
        label: 'General',
        component: GeneralSettings
    },
    {
        key: 'notifications',
        label: 'Notifications',
        component: NotificationsSettings
    },
    {
        key: 'privacy',
        label: 'Privacy',
        component: PrivacySettings
    }
]
const currentTab = ref<TabKey>('general')
const currentTabComponent = computed(() => tabs.find(tab => tab.key === currentTab.value)?.component)
</script>

<template>
    <main class="max-w-2xl mx-auto px-4">
        <nav class="font-medium text-center text-gray-500 border-b border-gray-200 mb-5">
            <ul class="flex flex-wrap -mb-px">
                <li v-for="tab in tabs" :key="tab.key">
                    <TabLink :tab="tab" :currentTab="currentTab" @click="currentTab = tab.key" />
                </li>
            </ul>
        </nav>
        <Transition mode="out-in">
            <KeepAlive>
                <component :is="currentTabComponent" />
            </KeepAlive>
        </Transition>
        <NotificationList />
    </main>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity .1s ease-in-out;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
