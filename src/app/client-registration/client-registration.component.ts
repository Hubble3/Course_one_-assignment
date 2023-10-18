import { Component } from '@angular/core';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.css']
})
export class ClientRegistrationComponent {
  client = {
    name: '',
    email: '',
    address: '',
    password: '',
    repeatPassword: ''
  };

  meeting = {
    topic: '',
    people: 0,
    startTime: ''
  };

  onClientRegistrationSubmit() {
    // Handle client registration form submission
    console.log('Client Registration Submitted:', this.client);
  }

  onMeetingScheduleSubmit() {
    // Handle meeting schedule form submission
    console.log('Meeting Scheduled:', this.meeting);
  }
}
