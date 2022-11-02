// import React , {useState} from 'react';

// import auth from '@react-native-firebase/auth';
// import Mobile from './Mobile';
// import OTP from './OTP';


// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// export default function MobileLogin() {
// const [confirm ,setConfirm] = useState(null)

// const mobileLogin = async (phoneNumber) =>{
//     console.log(phoneNumber);
//    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//       setConfirm(confirmation)
// }


// const confirmVerification = async (code) => {
//     try {
//       await  confirm.confirm(code)
//     } catch (error) {

//         console.log(error);
        
//     }
// }


// if (confirm) return <OTP onSubmit={confirmVerification}/>


// return <Mobile  onSubmit={mobileLogin}/>



// }

