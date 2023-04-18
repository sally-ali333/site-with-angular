import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  
  namealert: string = '';
  emailalert: string = '';
  phonealert: string = '';
  areaalert: string = '';

  namevalid(e: any) {
    if (e.target.value == '') {
      this.namealert = 'Please enter your name.';
    } else {
      this.namealert = ''
    }
  }

  emailvalid(e: any) {
    if (e.target.value == '') {
      this.emailalert = 'Please enter your email.';
    } else {
      this.emailalert = ''
    }
  }

  phonevalid(e: any) {
    if (e.target.value == '') {
      this.phonealert = 'Please enter your phone.';
    } else {
      this.phonealert = 'valid'
    }
  }

  areavalid(e: any) {
    if (e.target.value == '') {
      this.areaalert = 'Please enter your message.';
    } else {
      this.areaalert = ''
    }
  }
}
