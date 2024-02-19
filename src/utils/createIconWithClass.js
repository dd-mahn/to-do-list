export default function createIconWithClass(className) {
    const icon = document.createElement('i');
    icon.classList.add(className);
    return icon;
}