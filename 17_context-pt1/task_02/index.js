const callbackPrompt = {
  message: 'Tell me yor number',
  showPrompt() {
    const phoneNumber = prompt(this.message);
  },
  showDeferredPrompt(ms) {
    setTimeout(this.showPrompt.bind(this), ms);
  },
};
callbackPrompt.showDeferredPrompt(2000);
