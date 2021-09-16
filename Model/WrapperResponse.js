module.exports = class WrapperResponse{
  constructor(status, response){
    this.status = status
    this.data = response
  }
  generateSuccessResponse=(data)=>{
    this.status = 'success'
    this.data = data
    return this
  }
}