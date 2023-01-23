const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // Stashes event so that it can be triggered later
  window.deferredPrompt = event;
  // reveal install button
  butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    // If the deferred prompt isn't available
    return;
  }
  // show the install prompt
  promptEvent.prompt();
  // reset deferred prompt variable to null
  window.deferredPrompt = null;
  // hide the install button
  butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {});
