function main() {
    let firstUser = "Matias.Kehler@gmail.com"
    let firstPassword = 1234
    
    login(firstUser, firstPassword)
}



function login(firstUser, firstPassword) {
    let trys = 0

    for (let i = 0; i < 3; i++) {
        let user = prompt("Ingrese su nombre de usuario: ")
        let password = prompt("Ingrese su contraseña: ")
        trys = trys + 1
        if (user == firstUser && password == firstPassword) {
            alert("¡Bienvenido!")
            menu()
            break
        } else {
            alert("Usuario o contraseña incorrecta.")
        }
    } tryControl(trys)
}

function tryControl(trys) {
    if (trys == 3) {
        alert("Supero el maximo de errores permitidos, vuelva a intentarlo en unos instantes.")
    }
}

function menu() {
    let menu = ("Ingrese un numero: \n \nOpcion 1 - Comprar Pelicula. \nOpcion 2 - Vender Pelicula. \nOpcion 3 - Salir.")
    let option = Number(prompt(menu))

    while (option != 3) {
        if (option == 1) {
            let fileName = prompt("Ingrese que pelicula desea comprar: ")
            alert("Usted a elejido la pelicula " + fileName + ".")
        }else if (option == 2) {
            alert("Cada pelicula que compramos tiene un precio de $300.")
            let filmCount = Number(prompt ("Ingrese la cantidad de peliculas que desea vender: "))
            alert("Usted desea vender " + filmCount + " peliculas.")
            let math = filmCount * 300
            alert("Por esta cantidad le abonaremos $" + math + ".")
        }
        option = Number(prompt(menu))
    } alert("Gracias por utilizar nuestro programa.")
}


main()