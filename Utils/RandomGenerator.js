
module.exports = class RandomGenerator{
  constructor(){
    
  }
  #random=()=>{
    let random = Math.floor(Math.random() * 10)
    return random.toString()
  }
  generate=()=>{
    let generatedOTP = ""
    for(let i=0;i<6;i++){
      generatedOTP += this.#random()
    }
    return generatedOTP
  }
}