import { atom } from 'recoil';

const exampleAtom = atom({
    key: 'exampleAtom',
    default: 'hello world'
})

export {exampleAtom};