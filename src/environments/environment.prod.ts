export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyAyuwOuzS7zEPRGYazFkSg0kkcUdJC3rD0",
    authDomain: "appjetport.firebaseapp.com",
    databaseURL: "https://appjetport-default-rtdb.firebaseio.com",
    projectId: "appjetport",
    storageBucket: "appjetport.appspot.com",
    messagingSenderId: "1012648687100",
    appId: "1:1012648687100:web:1d92a9978bd6963eadee79",
    measurementId: "G-KKPVFVGG77"
  },
  langArr: [
    { name: 'English', code: 'en' },
    { name: 'española', code: 'es' },
    { name: 'عربى', code: 'ar' },
    { name: '中文', code: 'cn' }
  ],
  apiUrl: "https://appjetport.uc.r.appspot.com",
  mapOptions: {
    zoom: 17,
    mapTypeControl: false,
    zoomControl: false,
    fullscreenControl: false,
    streetViewControl: false
  }
};



export let POSITION_INTERVAL = 10 * 1000; // 10s for refreshing geolocation

export let DEAL_STATUS_PENDING = 'pending';
export let DEAL_STATUS_ACCEPTED = 'accepted';
export let DEAL_TIMEOUT = 20; // 20 seconds

export let TRIP_STATUS_WAITING = 'waiting';
export let TRIP_STATUS_GOING = 'going';
export let TRIP_STATUS_FINISHED = 'finished';
export let TRIP_STATUS_CANCELED = 'canceled';
export let TRANSACTION_TYPE_WITHDRAW = 'withdraw';

export let PLAY_AUDIO_ON_REQUEST = true;
export let AUDIO_PATH = "./assets/audio/sound.mp3" //must have mp3 file

export let DEFAULT_AVATAR = './assets/img/default.png';