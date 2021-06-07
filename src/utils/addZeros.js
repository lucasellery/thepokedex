function addZeros(number) {
  const amountOfZeros = {
    [3]: `${number}`,
    [2]: `0${number}`,
    [1]: `00${number}`,
  }

  return amountOfZeros[number?.length] || `${0}`
}

export default addZeros;