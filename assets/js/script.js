const navMenu = document.querySelector('nav');
const handleClickMenu = (e) => {
    const opened = 'menu-opened';
    const closed = 'menu-closed';
    const target = e.target.classList;
    (e.target.className === closed) ?
        target.replace(closed, opened) :
        target.replace(opened, closed);
}
navMenu.addEventListener('click', handleClickMenu);

const allSections = Array.from(document.querySelectorAll('li'));
const handleClickSection = (e) => {
    const currentSectionNoSeleted = !e.target.classList.contains('active');
    if (currentSectionNoSeleted) {
        allSections.forEach(section => section.classList.remove('active'));
        e.target.classList.toggle('active');
        navMenu.classList.replace('menu-opened', 'menu-closed');
    }
}
allSections.forEach(section => section.addEventListener('click', handleClickSection))

const buttonGetCoffe = document.querySelector('header button');
const handleClickButton = () => {
    alert('Wake up, Neo!');
}
buttonGetCoffe.addEventListener('click', handleClickButton);