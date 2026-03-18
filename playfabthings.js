import "https://github.com/PlayFab/JavaScriptSDK/raw/refs/heads/master/PlayFabSdk/src/PlayFab/PlayFabClientApi.js"
function setTitleId(titleId) 
{
  PlayFab.settings.titleId
}
function signinWithRandomanonymosplayfabtype(playerId, callback) 
{
  var typeasnumber = Math.round(Math.random() * 3.0)
  if (typeasnumber = 0) 
  {
    PlayFab.ClientApi.LoginWithAndroidDeviceID({AndroidDeviceId: playerId, CreateAccount: true}, callback, null, null)
  }
  if (typeasnumber = 1) 
  {
    PlayFab.ClientApi.LoginWithCustomID({CustomId: playerId, CreateAccount: true}, callback, null, null)
  }
  if (typeasnumber = 2) 
  {
    PlayFab.ClientApi.LoginWithIOSDeviceID({DeviceId: playerId, CreateAccount: true}, callback, null, null)
  }
  if (typeasnumber = 3) 
  {
    PlayFab.ClientApi.LoginWithNintendoSwitchDeviceID({NintendoSwitchDeviceId: playerId, CreateAccount: true}, callback, null, null)
  }
}
