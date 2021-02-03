// Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomInt = function (min, max) {
  if (min < 0) {
    alert('Диапазон чисел должен быть положительным');
    return null;
  }
  if (max < min || max == min) {
    alert('Значение «от» должно быть больше значению «до»');
    return null;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

alert(getRandomInt(-100.46, 200.46));



// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
const getRandomFloat = function (min, max, decimal = 2) {
  if (min < 0) {
    alert('Диапазон чисел должен быть положительным');
    return null;
  }
  if (max < min || max == min) {
    alert('Значение «от» должно быть больше значению «до»');
    return null;
  }
  return ((Math.random() * (max - min) + min).toFixed(decimal));
}

alert(getRandomFloat(100.46456456, 200.46456456));
