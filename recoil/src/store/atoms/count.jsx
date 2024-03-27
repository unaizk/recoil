import { atom, selector } from "recoil";

export const notificationAtom = atom({
    key :" notificationAtom",
    default : 12
})

export const networkAtom = atom({
    key :" networkAtom",
    default : 102
})
export const jobsAtom = atom({
    key :" jobsAtom",
    default : 0
})
export const messagingAtom = atom({
    key :" messagingAtom",
    default : 0
})


export const totalNotifications = selector({
    key : 'totalNotifications',
    get : ({get}) =>{
        const networkAtomCount = get(networkAtom);
        const notificaionAtomCount = get(notificationAtom);
        const jobsAtomCount = get(jobsAtom);
        const messaginAtomCount = get(messagingAtom);

        return networkAtomCount + notificaionAtomCount + jobsAtomCount + messaginAtomCount
    }
})

