function togglemode() {
    const html = document.documentElement

    if(html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }
}
/* Ou pode usar somente o comando simplificado:

html.classList.toggle("light")

*/