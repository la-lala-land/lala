// DOCTYPE - ABSOLUTE TRASH

/**
 * Works like a perceptron of sorts (or so I guess)
 */
class Decider {
  /**
   * Calculate the probability of a positive decision
   * @param {Array} input - Array of objects with "weight" and "value" 
   * @returns {Number} wei - Weight of a positive decision
   */
  run(input) {
    let wei = 0;
    for (let i = 0; i < input.length; ++i) {
      wei += input[i].value * input[i].weight;
    }
    return wei
  }
  /**
   * Decide on a positive or negative response with an array of factors
   * @param {Array} input - Array of objects with "weight" and "value" 
   * @returns {Boolean} The decision to make 
   */
  decide(input) {
      const req = (input.map(x => x.weight).reduce((acc, s) => acc + s) * 2) / input.length
      const wei = this.run(input)
      return wei >= req
  }
}

export default Decider;