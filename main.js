// Obtenha o botão pelo ID
document.addEventListener("DOMContentLoaded", function () {
  var meuBotao = document.querySelector("#switch button")
  var removeLight = document.getElementById("removeLight")

  meuBotao.addEventListener("click", function () {
    if (removeLight.classList.contains("light")) {
      removeLight.classList.remove("light")
    } else {
      removeLight.classList.add("light")
    }
  })
})
