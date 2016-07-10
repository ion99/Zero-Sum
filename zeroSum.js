function zeroSum (numbers) {
  for (let i = 0; i < numbers.length; i++){
    for (let j = i + 1; j < numbers.length; j++){
      if (numbers[i] + numbers[j] === 0){
        return true;
      }
    }
  }
  return false;
}