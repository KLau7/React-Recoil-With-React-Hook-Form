import { atom, selector } from 'recoil';

export const currentPageState = atom({
    key: 'currentPageState',
    default: 'login'
})

export const currentUser = atom({
    key: 'currentUser',
    default: ''
})

export const existingProfiles = atom({
    key: 'existingProfiles',
    default: []
})

export const currentUserProfile = selector({
    key: 'currentUserProfile',
    get: ({get}) => {
        const profiles = get(existingProfiles);
        const user = get(currentUser);
        return profiles.find(item => item.Email === user);
    }
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


