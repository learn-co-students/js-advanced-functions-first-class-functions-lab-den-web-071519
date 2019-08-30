const returnFirstTwoDrivers = function(arrayOfDrivers){
  return arrayOfDrivers.slice(0,2)
}

const returnLastTwoDrivers = function(arrayOfDrivers){
  let penultimateElement = (arrayOfDrivers.length - 2)
  return arrayOfDrivers.slice(penultimateElement)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(int){
    return function(fare){
      return fare * int
    }
}

const fareDoubler = function(fare){
  return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
  return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = function(arrayOfDrivers, theFunction){
  return theFunction(arrayOfDrivers)
}
