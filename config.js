// App settings: change "name", "mark" (2 letters on the logo) and "hello" (name shown on the home screen) to personalise
window.APP_CFG = {
  name: "Oliver's Revision",
  mark: "OL",
  hello: "Oliver",        // shows "Ready, Oliver?" on the home screen
  ls: "bizrev",           // storage key: keep as is
  dataNs: "bizdata",      // live-sync folder: keep as is
  packsNs: "bizpacks",
  slides: false
};
// Live sync (shared Firebase project; each person signs in with their own email and only sees their own data)
window.DOGTAG_FIREBASE = {
  apiKey: "AIzaSyDq1E7p6PZErS0QgTpmeguLdRmKcArDJQg",
  authDomain: "dogtag-revision-74abc.firebaseapp.com",
  projectId: "dogtag-revision-74abc",
  storageBucket: "dogtag-revision-74abc.firebasestorage.app",
  messagingSenderId: "1041867035775",
  appId: "1:1041867035775:web:f2888211ece0fbe17e1b4a",
  recaptchaSiteKey: "6LdXOuktAAAAAMDSKFgoJLPmuVRsIc7BUcfstsjC"   // App Check (reCAPTCHA v3) for AI marking
};
