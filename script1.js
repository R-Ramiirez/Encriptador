function encryptText() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    if (inputText.trim() === '') {
        return;
    }
    let encryptedText = inputText
        .replace(/e/g, 'efter')
        .replace(/i/g, 'imges')
        .replace(/a/g, 'aim')
        .replace(/o/g, 'ocber')
        .replace(/u/g, 'usfaf');
    
    displayOutput(encryptedText);
}

function decryptText() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    if (inputText.trim() === '') {
        return;
    }
    let decryptedText = inputText
        .replace(/efter/g, 'e')
        .replace(/imges/g, 'i')
        .replace(/aim/g, 'a')
        .replace(/ocber/g, 'o')
        .replace(/usfaf/g, 'u');
    
    displayOutput(decryptedText);
}

function displayOutput(text) {
    const noMessageContent = document.getElementById('noMessageContent');
    const outputContent = document.getElementById('outputContent');
    const outputText = document.getElementById('outputText');
    const outputText2 = document.getElementById('outputText2');
    
    noMessageContent.style.display = 'none';
    outputContent.style.display = 'block';
    outputText.textContent = text;
    outputText2.textContent = text;    
}

function copyText() {
    const outputText = document.getElementById('outputText').textContent;
    navigator.clipboard.writeText(outputText)
}