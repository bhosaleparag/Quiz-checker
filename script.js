const form = document.getElementById("quiz-form")
const answers = Array.from(document.querySelectorAll(".answer"))
const questionItems = document.querySelectorAll(".question-item")
const alert = document.querySelector("#alert")
const para = document.querySelector("p")
form.addEventListener("submit", e => {
  e.preventDefault()

  questionItems.forEach(questionItem => {
    questionItem.classList.add("incorrect")
    questionItem.classList.remove("correct")
  })

  let amount = 0 
  const checkedAnswers = answers.filter(answer => answer.checked)
  checkedAnswers.forEach(answer => {
    const isCorrect = answer.value === "true"
    const questionItem = answer.closest(".question-item")
    if (isCorrect) {
      amount = amount + 1
      questionItem.classList.add("correct")
      questionItem.classList.remove("incorrect")
    } else {
      questionItem.classList.add("incorrect")
      questionItem.classList.remove("correct")
    }
    alert.classList.add("active")
    setTimeout(()=>{
      alert.classList.remove("active")
      },3000);
      
      para.innerText = amount
  })
})
