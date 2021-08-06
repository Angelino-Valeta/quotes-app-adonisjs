'use strict'

class Register {
  get rules () {
    return {
      name: 'required',
      email: 'required|email|unique:users',
      password: 'required|min:8'
    }
  }
  get message(){
    return {
      'name.required': 'Full name is required',
      'email.required': 'email is required',
      'password': 'password should be at least 8 characters'
    }
  }
}

module.exports = Register
