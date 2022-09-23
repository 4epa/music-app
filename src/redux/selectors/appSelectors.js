const getAppDevice = (state) => {
  return state.appOptions.userDevice;
};

const getMobileControlerShow = (state) => {
  return state.appOptions.showMobileAudioControler;
};

export { getAppDevice, getMobileControlerShow };
