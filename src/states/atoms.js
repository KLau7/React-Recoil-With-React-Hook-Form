import { atom, atomFamily, selector, waitForAll } from 'recoil';
import { getData, dataAPI } from '../data/asyncData';

export const currentPageState = atom({
  key: 'currentPageState',
  default: 'login'
});

export const currentUser = atom({
  key: 'currentUser',
  default: ''
});

export const existingProfiles = atom({
  key: 'existingProfiles',
  default: []
});

export const currentUserProfile = selector({
  key: 'currentUserProfile',
  get: ({ get }) => {
    const profiles = get(existingProfiles);
    const user = get(currentUser);
    return profiles.find(item => item.Email === user);
  }
});

export const submittedFormState = atom({
  key: 'submittedFormState',
  default: {}
});

export const newUserAgeState = atom({
  key: 'newUserAgeState',
  default: ''
});

export const newUserAgeDerivedState = selector({
  key: 'newUserAgeDerivedState',
  get: ({ get }) => {
    const today = new Date();
    const userBirthDate = new Date(get(newUserAgeState));
    return !userBirthDate.getFullYear() ? '' : today.getFullYear() - userBirthDate.getFullYear();
  }
});

// context API
export const themeState = atom({
  key: 'themeState',
  default: 'light'
});

export const teamState = atom({
  key: 'teamState',
  default: 'magma'
});

export const newsState = atom({
  key: 'newsState',
  default: ['sports']
});

export const siteSettingsState = atomFamily({
  key: 'siteSettingsState',
  default: param => param.length % 2 === 0
});

export const siteSettingsKeys = atom({
  key: 'siteSettingsKeys',
  default: []
});

export const currentUserIDState = atom({
  key: 'CurrentUserID',
  default: 0
});

export const clickSum = atom({
  key: 'clickSum',
  default: 0
});

export const currentUserNameState = selector({ 
  key: 'CurrentUserName',
  get: async ({ get }) => {
    console.log(get(clickSum), 'get(clickSum)');
    if (get(clickSum) >= 3) throw 'ERROR !!';

    const user = await getData(get(currentUserIDState));
    return user.name;
  }
});
