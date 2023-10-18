import { Component } from '@angular/core';

@Component({
  selector: 'app-meeting-schedule',
  templateUrl: './meeting-schedule.component.html',
  styleUrls: ['./meeting-schedule.component.css']
})
export class MeetingScheduleComponent {
  meeting = {
    topic: '',
    people: 0,
    startTime: ''
  };

  onSubmit() {
    // Implement scheduling logic here
    console.log('Meeting Scheduled:', this.meeting);
  }
}
