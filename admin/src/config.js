import { initializeApp } from 'firebase/app'
import 'firebase/auth'

export const appName = 'my-adv-react-25-06'

const config = {
  apiKey: 'AIzaSyBm-uy3Z9dHmRtuPOV8eGANlN1zuQ0cYkM',
  authDomain: `${appName}.firebaseapp.com`,
  databaseURL: `https://${appName}.firebaseio.com`,
  projectId: appName,
  storageBucket: `${appName}.appspot.com`,
  messagingSenderId: '1032465599642'
}

initializeApp(config)
