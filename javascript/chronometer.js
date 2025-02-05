class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
    // ... your code goes here
  }

  start(callback) {
    this.intervalId = setInterval (() => {
      if (callback !== undefined) {
        return callback
      }
      return this.currentTime++
    }, 1000)// ... your code goes here
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
    // ... your code goes here
  }

  getSeconds() {
    return this.currentTime % 60
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return ('0' + value.toString())
    }
    return value.toString()
    // ... your code goes here
  }

  stop() {
    return clearInterval(this.intervalId)
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0
    // ... your code goes here
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()).toString() + ":" + this.computeTwoDigitNumber(this.getSeconds()).toString()
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
