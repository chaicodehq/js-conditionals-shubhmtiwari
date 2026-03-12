/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  // Your code here
  let ticketPrice;
  if (age < 0 || isNaN(age)) {
    return -1;
  } else if (age <= 12) {
    if(isWeekend){
      ticketPrice = 8 + 3;
    }
    else{
      ticketPrice = 8;
    }
  } else if (age > 12 && age <= 17) {
    if (isWeekend) {
      ticketPrice = 12 + 3;
    } else {
      ticketPrice = 12;
    }
  } else if (age > 17 && age <= 59) {
    if (isWeekend) {
      ticketPrice = 15 + 3;
    } else {
      ticketPrice = 15;
    }
  }
  else{
    if (isWeekend) {
      ticketPrice = 10 + 3;
    } else {
      ticketPrice = 10;
    }
  }
  return ticketPrice;
}
