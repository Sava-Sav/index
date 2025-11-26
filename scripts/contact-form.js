const contactUlButton = document.getElementById("send")
const contactYNText = document.getElementById("yourName")
const contactTextText = document.getElementById("yourText")
const contactEmailText = document.getElementById("yourEmail")
const contactEntire = document.getElementById("wholeIdea")

//contactEntire.addEventListener('click', () => ( 
//    contactTextText.classList.toggle('hidden') ));

//contact

contactEntire.addEventListener('submit', (event) => {
    const name = event.target.sender.value;
    const message = event.target.message.value;

    const subject = encodeURIComponent('$(name) says hello!') 
    const body = encodeURIComponent(message);

    window.location.href = 'mailto:et.sava.m@eduiteh.eu?subject=${subject}&|';
})