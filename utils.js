Math.random = () => crypto.getRandomValues(new Uint32Array(1))[0] / (2**32);

function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        // alert(`Copied: ${text}`);
    }).catch(err => console.error('Failed to copy text: ', err));
};
