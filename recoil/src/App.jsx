import { useState } from 'react'
import './App.css'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import {  jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotifications } from './store/atoms/count'

function App() {

  return (
   <div>
      <MainApp />
   </div>
  )
}


function MainApp (){

  const networkCount = useRecoilValue(networkAtom);
  const jobsCOunt = useRecoilValue(jobsAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom);

  const totalNotificationCount = useRecoilValue(totalNotifications)
  return (
    <>
    <button>Home</button>
    <button>My network ({networkCount})</button>
    <button>Jobs ({jobsCOunt}) </button>
    <button>Messaging ({messagingCount})</button>
    <button>Notifications ({notificationCount})</button>
    <button>Me ({totalNotificationCount})</button>
    </>
  )
}


export default App
