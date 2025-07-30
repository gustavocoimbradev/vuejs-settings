<img height="100" alt="hire-vuejs-hero" src="https://github.com/user-attachments/assets/75fa5e93-d016-436a-bc47-4b80c2e3bf30" />

## About the project

This is a Vue.js settings panel with multiple tabs (General, Notifications, Privacy). It was created for learning and portfolio purposes, focusing on composition API, state management with composables, and basic UI feedback.

#### Features

- Tab navigation between sections  
- Update and save general settings  
- Configure notification preferences  
- Manage privacy options  
- Basic visual feedback on save actions  

#### Technologies

- Vue 3 + Vite  
- Tailwind CSS  
- TypeScript  
- Composition API  

## Main Files

#### Components

- [`GeneralSettings.vue`](src/components/GeneralSettings.vue) – User info form  
- [`NotificationsSettings.vue`](src/components/NotificationsSettings.vue) – Notification preferences  
- [`PrivacySettings.vue`](src/components/PrivacySettings.vue) – Privacy settings section  
- [`NotificationList.vue`](src/components/NotificationList.vue) – Reusable checkbox list  
- [`TabLink.vue`](src/components/TabLink.vue) – Tab navigation link  
- [`App.vue`](src/App.vue) – Root component with tab logic  

#### Composables

- [`useSettings.ts`](src/composables/useSettings.ts) – Reactive general/notification/privacy data  
- [`useNotifications.ts`](src/composables/useNotifications.ts) – Handle toast/feedback logic  

#### Core

- [`main.ts`](src/main.ts) – App entry point  
- [`vite.config.ts`](vite.config.ts) – Vite configuration  
- [`types.ts`](src/types.ts) – Types for settings  
- [`index.html`](index.html) – Main HTML file  
