import { atom, selector } from 'recoil';

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

export const newUserAgeState = atom({
    key: 'newUserAgeState',
    default: ''
})

export const newUserAgeDerivedState = selector({
    key: 'newUserAgeDerivedState',
    get: ({get})=>{
        const today = new Date();
        const userBirthDate = new Date(get(newUserAgeState));
        return !userBirthDate.getFullYear() ? '' : (today.getFullYear() - userBirthDate.getFullYear());
    }
})


