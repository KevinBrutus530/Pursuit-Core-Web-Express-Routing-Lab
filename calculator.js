addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("button");
  button.addEventListener("click", () =>{
    axios.get(`http://localhost:3000/${resultCalculation}/${num1}/${num2}`).then(res => {
      let num1 = document.querySelector('#num1').value;
      let num2 = document.querySelector('#num2').value;
      let resultCalculation = document.querySelector('select').value;
      res.data.forEach(calculation =>{
        let
      })
    })
  })
});
startCalculation