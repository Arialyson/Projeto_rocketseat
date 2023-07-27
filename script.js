function togglemode() {
    const html = document.documentElement

    if(html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }

    /* Ou pode usar somente o comando simplificado:

    html.classList.toggle("light")

    */
    //pegar a tag img
    const img = document.querySelector("#profile img")

    //Substituir a imagem
    if(html.classList.contains("light")) {
    //Se tiver light mode, adicionar a imagem light
        img.setAttribute("src","assets/avatar2-light.png")
}   else {
    //se tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "assets/avatar2.png")
}

}
