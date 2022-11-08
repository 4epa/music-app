const getAppDevice = (state) => {
  return state.appOptions.userDevice;
};

const getMobileControllerShow = (state) => {
  return state.appOptions.showMobileAudioController;
};

const getInitializeApp = (state) => {
  return state.appOptions.initializeApp;
};

export { getAppDevice, getMobileControllerShow, getInitializeApp };
