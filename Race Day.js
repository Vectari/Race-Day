let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const age = 18;
if (age > 18 && registeredEarly) {
raceNumber += 1000
}
if (age > 18 && registeredEarly) {
  console.log(`Your will race at 9:30 and your race number is: ${raceNumber}`);
} else if (age > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 and your race numer is ${raceNumber}`);
} else if (age < 18) {
  console.log(`Race for youth start at 12:30 and your race number is ${raceNumber}`);
} else {
  console.log('Go check registration desk.')
}