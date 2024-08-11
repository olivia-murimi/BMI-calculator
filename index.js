const btnEl = document.getElementById("btn")
const bmiInputEl = document.getElementById("bmi-reult")
const weightconditionEl = document.getElementById("weight-conditon")
function calculateBMI(){
    const heightValue = document.getElementById("height").value / 100
    const weightValue = document.getElementById("weight").value

    const bmiValue = weiightValue / (heightValue * heightValue)

    
    bmiInputEl.value = bmiValue;

    if(bmiValue < 18.5){
      weightConditionEl.innerText = "Under weight";
    } else if (bmiValue >=18.5 && bmiValue <= 24.9)
    {
      weightConditionEl.innerText = "Normal weight";
    } else if (bmiValue >= 25 && bmiValue <29.9){
      weightConditionEl.innerText = "Overweight";
    } else if (bmiValue <=30){
      weightConditionEl.innerText = "Obesity";
    }
}

btnEl.addEventListener("click", calculateBMI)


