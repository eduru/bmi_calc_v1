//writing the advices depending on your bmi
const underweight = "You are underweight. Try to gain more weight by adding progressively 200 calories every day to your diet while."
const normalWeight = "Your BMI is normal. Keep eating healthy and exercise regularly."
const overWeight = "You have overweight. Reduce your calorie intake by 200 every day and exercise regularly."
const obesityClass1 = "You have obesity Class 1. Speak with a doctor."
const obesityClass2 = "You have obesity Class 2. Speak with a doctor."
const morbidObesity = "You have Morbid Obesity. Speak with a doctor."

const adviceBasedOnYour = (bmi) => {
    if (bmi <= 18.5) {
        return underweight;
    } else if (bmi >= 18.5 && bmi <= 24.99) {
        return normalWeight;
    } else if (bmi >= 25 && bmi <= 29.99) {
        return overWeight;
    } else if (bmi >= 30 && bmi <= 34.99) {
        return obesityClass1
    } else if (bmi >= 35 && bmi <= 39.99) {
        return obesityClass2
    } else {
        return morbidObesity
    }
}

export default adviceBasedOnYour;