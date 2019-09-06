let spaceXCountDown = (num) => {
  let newNum = num;
  if (newNum >= 0) {
    console.log(num)
    newNum -= 5
    spaceXCountDown(newNum)
  } else {
    console.log("BLASTOFF!")
  }

}

spaceXCountDown(10)
