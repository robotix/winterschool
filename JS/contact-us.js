
    const scriptURL = 'https://script.google.com/macros/s/AKfycby8uaWUxZ1r8AmAT0HLojVbwhuroRYjtjsteYamlttoQ5QcZe4a3Q-loJXnoNjsUor0/exec'
    const form = document.forms['google-sheet']

    form.addEventListener('submit', e => {
      e.preventDefault();
      fetch(scriptURL, {
          method: 'POST',
          body: new FormData(form)
        })
        .then(response => alert("Thanks for Contacting us..! We Will Reach Out to You Soon..."))
        .catch(error => console.error('Error!', error.message))
    })