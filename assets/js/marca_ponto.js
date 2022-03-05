

green_bar = 1
grey_bar = 1

// Elemento Botão de Ponto
const botaoRegistro = document.querySelector(".containerBotoes")

// Adicionando evento de click ao elemento
botaoRegistro.addEventListener("click", registroHorario)


function registroHorario(event) {
    const elemento = event.target
    const id_elemento = elemento.id

    if (elemento.className == 'botao') {
        changeColor(elemento)

        const message = document.querySelector(".containerMensagem")
        message.innerHTML = choiceMessage(id_elemento)
        message.style.display = "block"

        const barra = document.querySelectorAll(".barra")[id_elemento - 1]
        const update_bar = setInterval(function loadBar(id_elemento) {
            barra.style.backgroundImage = `linear-gradient(to right, #A4D9B3 ${green_bar}%, #D3D3D3 ${grey_bar}%)`
            barra.style.animationDuration = '5s'
            green_bar++
            if (green_bar > 101) {
                clearInterval(update_bar)
                green_bar = 1
            }
        }, 1000)
    }
}

function changeColor(elemento) {
    // Função para alterar cor do botão
    elemento.style.backgroundColor  = "#A4D9B3"
}





function getTime() {
    // Função que retorna a hora
    const dateObject = new Date()
    let hour = dateObject.getHours()
    return hour   
}

function getDate() {
    // Função que retorna a data
    const dateObject = new Date()
    let date = dateObject.getDate()
    return date
}

function choiceMessage(id_elemento) {

    switch (id_elemento) {
        case "1":
            return "Bom trabalho!"
        case "2":
            return "Bom apetite!"
        case "3":
            return "Bom retorno!"
        case "4":
            return "Bom descanso!"
    }

    
}