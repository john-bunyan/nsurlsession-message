import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data: any

  constructor() {}

  async httpRequest() {

    let url = "https://en.wikipedia.org/static/images/icons/wikipedia.png"
    fetch(url, {}).then(
      response => {
        console.log(`response status: ${response.status}`)
        this.data = `status: ${response.status}`
        return(true)
      }
    ).catch( error => {
      console.log(error.message)
      this.data = error.message
    })      
  }

}
