
const cells = document.querySelectorAll('.cell');
const generateBtn = document.getElementById('generate');
const sendBtn = document.getElementById('send');
const maxNumbers = 6;
let selectedNumbers = [];

generateBtn.addEventListener('click', () => {
    if (selectedNumbers.length >= maxNumbers) return;
    let num;
    do {
        num = Math.floor(Math.random() * 25) + 1;
    } while (selectedNumbers.includes(num));
    selectedNumbers.push(num);
    cells[selectedNumbers.length - 1].textContent = num;
    cells[selectedNumbers.length - 1].classList.add('marked');
    
    if (selectedNumbers.length === maxNumbers) {
        sendBtn.style.display = 'inline-block';
        confetti();
    }
});

sendBtn.addEventListener('click', () => {
    const text = `¡Estos son mis números de la Lotería SAP! %0A ${selectedNumbers.join(', ')}`;
    const url = `https://wa.me/?text=${text}`;
    window.open(url, '_blank');
});
