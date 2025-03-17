function copyCode(button) {
    const codeElement = button.nextElementSibling.querySelector('code');
    const text = codeElement.innerText;
    navigator.clipboard.writeText(text).then(() => {
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}