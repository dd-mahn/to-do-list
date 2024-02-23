export default function createDivWithClass(...className){
    const div = document.createElement('div');
    div.classList.add(...className);
    return div;
}