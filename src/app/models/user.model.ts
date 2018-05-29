export class User {
  id: ''
  password: ''
  constructor (data) {
    this.id = data._id || ''
    this.password = data.password || ''
  }
}
