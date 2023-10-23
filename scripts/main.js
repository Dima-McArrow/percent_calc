console.info("Percent calculator V0.1")

// Get data from form fields

const getData = () => {
  // instance of the form
  const myForm = document.querySelector(".my_form")

  // add event listener
  myForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let myFormData = new FormData(myForm)
    let userNumber = myFormData.get("userNumber")
    let userOp = myFormData.get("userOp")
    let userPer = myFormData.get("userPer")
    let result = percCalc(userNumber, userOp, userPer)
    showTitle(userNumber, userOp, userPer)
    showRes(result)
    resBut()
  })
}

const showTitle = (num, op, per) => {
  const cont = document.querySelector(".card-header")
  if (op == 1) {
    cont.textContent = `${num} + ${per}% =`
  }
  if (op == 2) {
    cont.textContent = `${num} - ${per}% =`
  }
}

const percCalc = (number, oper, perc) => {
  if (oper == 1) {
    return Number(number) + (Number(number) / 100) * perc
  }
  if (oper == 2) {
    return number - (number / 100) * perc
  }
}

const showRes = (res) => {
  const container = document.querySelector(".card-title")
  container.textContent = res
}

const resBut = () => {
  const resButton = document.getElementById('reset')
  resButton.addEventListener('click', () => {
    window.location.reload()
  })
}

getData()