const Calculate = (height, weight) => {
    let m2height = (height / 100)
    let squaredHeight = m2height * m2height
    let total = (weight / squaredHeight)
    const multiplier = 10
    let result = Math.round(total * multiplier) / multiplier;
    if (Number.isNaN(result)) {
        return 0;
    } return result;

}

export default Calculate;
