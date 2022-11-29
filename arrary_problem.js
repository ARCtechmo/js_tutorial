// Remember, we're gonna use strict mode in all scripts now!
"use strict"

// Problem: My solution
/* We work for a company that builds smart home thermometers.  Our most recent task is this:
"Given an array of temperatures of one day, calculate the temperature amplitude.  Keep in mind that sometimes
 there might be a sensore error." */

// 1 Understanding the problem
/* Temperature amplitude is the difference between the highest and lowest temperature in the same geographical area 
  over a certain period of time */

// 2) Break the problem up into sub-problems
// Iterate over the array and print all data within the array
// Identify the highest and the lowest values in the array
// You need a way to filter out the non-numerical values of the array
// Create a 'amplitude' function that will subtract the highest and lowest values

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5]

// construct a new temperatures2 array only with the numerical values
// Ignore the sensor errors
const temperatures2 = []
for (let i = 0; i < temperatures.length; i++) {
  if (typeof temperatures[i] === "number") {
    temperatures2.push(temperatures[i])
  }
}

// Create a function to calculate the temperature amplitude.
// Use the Math.max() and Math.min() functions to determine the largest and smallest values
function amplitudeCalc(lst1) {
  const maxTemp = Math.max(...lst1)
  const minTemp = Math.min(...lst1)
  if (maxTemp > 0 && minTemp < 0) {
    const tempAmp = maxTemp - minTemp
    return `The amplitude is ${tempAmp}`
  } else if (maxTemp > 0 && minTemp >= 0) {
    const tempAmp = maxTemp - minTemp
    return `The amplitude is ${tempAmp}`
  } else if (maxTemp < 0 && minTemp < 0) {
    const tempAmp = Math.abs(maxTemp) + minTemp
    return `The amplitude is ${tempAmp}`
  }
}
console.log(amplitudeCalc(temperatures2))

// Instructor solution
const calcTempAmplitude = function (temps) {
  let max = temps[0]
  let min = temps[0]
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i]
    if (typeof curTemp !== "number") continue
    if (curTemp > max) max = curTemp
    if (curTemp < min) min = curTemp
  }
  console.log(max, min)
  return max - min
}
const amplitude = calcTempAmplitude(temperatures)
console.log(amplitude)

// Start Here Next
// Problem 2: Our boss gives us another array of temperatures and asks for the amplitudes.
// Understanding the problem.
// How do we merge two arrays?

// the arr1.concat(arr2) method allows us to combine arrays
// use the same function but send in two parameters

const tempArr1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5]
const tempArr2 = [55, 65, 75]

function amplitudeCalc2(temps1, temps2) {
  const temparr3 = temps1.concat(temps2)

  let max = temparr3[0]
  let min = temparr3[0]

  for (let i = 0; i < temparr3.length; i++) {
    const currentTemp = temparr3[i]

    if (typeof currentTemp !== "number") continue
    if (currentTemp > max) max = currentTemp
    if (currentTemp < min) min = currentTemp
  }
  return max - min
}
const amplitude2 = amplitudeCalc2(tempArr1, tempArr2)
console.log(amplitude2)
