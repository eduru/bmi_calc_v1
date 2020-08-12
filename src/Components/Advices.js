//writing the advices depending on your bmi
const underweight = "You are underweight. Try to gain more weight by adding progressively 200 calories every day to your diet while. Do some strength exercise meanwhile so you will increase your BMI in a healthy way"
const normalWeight = "Your BMI is normal. Keep eating healthy and exercise regularly."
const overWeight = "You have overweight. Reduce your calorie intake by 400 every day and exercise regularly. Intermittent Fasting could be your ally to achieve those goals. You can do it!!"
const obesityClass1 = "You have obesity Class 1. Speak with a nutritionist and start from today to take care of your health. Is hard and it will take time. This is not a sprint but a marathon. You can do it!!!"
const obesityClass2 = "You have obesity Class 2. Speak with a nutritionist and start from today to take care of your health. Is hard and it will take time. This is not a sprint but a marathon. You can do it!!!"
const morbidObesity = "You have Morbid Obesity. Speak with a doctor and start from today to take care of your health. Is hard and it will take time. This is not a sprint but a marathon. You can do it!!!"

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