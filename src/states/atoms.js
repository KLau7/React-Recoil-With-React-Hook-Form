import { atom } from 'recoil';

export const currentPageState = atom({
    key: 'currentPageState',
    default: 'login'
})

export const existingProfiles = atom({
    key: 'existingProfiles',
    default: []
})

export const submittedFormState = atom({
    key: 'submittedFormState',
    default: {}
})

