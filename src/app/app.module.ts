// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';  // Import FormsModule

import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientRegistrationComponent } from './client-registration/client-registration.component';
import { MeetingScheduleComponent } from './meeting-schedule/meeting-schedule.component';  // Import ClientRegistrationComponent

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ProjectsComponent,
    TasksComponent,
    MeetingsComponent,
    DashboardComponent,
    ClientRegistrationComponent,
    MeetingScheduleComponent,  // Add ClientRegistrationComponent to declarations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  // Add FormsModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
