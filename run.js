 document.addEventListener("DOMContentLoaded", ()=>{
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register("sw.js")
      .then(function(reg) {
        console.log('Registration succeeded')
        console.dir(reg)
      }).catch(function(error) {
        console.log("Registration failed")
        console.error(error)
      })
    }
});
Reveal.initialize({});
