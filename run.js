 document.addEventListener("DOMContentLoaded", ()=>{
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register("sw.js");
    }
});
Reveal.initialize({});
