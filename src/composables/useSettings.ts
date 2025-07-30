import { isFunctionDeclaration } from 'typescript'
import { ref, watch } from 'vue'

interface GeneralSettings {
    username: string
    email: string
    about: string
    gender: string
    country: string
}

const init = <T>(key: string, defaults: T) => {
    const stored = localStorage.getItem(key)
    return stored !== null
        ? JSON.parse(stored)
        : defaults
}

const general = ref<GeneralSettings>(
    init<GeneralSettings>('general', {
        about: 'TESTE',
        country: 'USA',
        gender: 'male',
        email: '',
        username: ''
    })
)

interface NotificationsSettings {
    email: boolean
    sms: boolean
}

const notifications = ref<NotificationsSettings>(
    init<NotificationsSettings>('notifications', {
        email: true,
        sms: true
    })
)

interface PrivacySettings {
    searchEngine: boolean
    visibility: string
}

const privacy = ref<PrivacySettings>(
    init<PrivacySettings>('privacy', {
        searchEngine: false,
        visibility: 'private'
    })
)

export function useSettings() {
    return { general, notifications, privacy }
}
