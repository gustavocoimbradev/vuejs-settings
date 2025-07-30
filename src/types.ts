import type { Component } from "vue"

export type TabKey = 'general' | 'notifications' | 'privacy'

export interface Tab {
    key: TabKey
    label: string
    component: Component
}