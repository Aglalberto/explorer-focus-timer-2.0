let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')
const controls = document.querySelectorAll('.control')

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light')
    
    controls.forEach(control => {
        control.classList.toggle('white-color');
    });
    
    const mode = darkMode ? 'light' : 'dark'
    
    event.currentTarget
        .querySelector('span').textContent = `${mode} mode ativado`

    darkMode = !darkMode
})