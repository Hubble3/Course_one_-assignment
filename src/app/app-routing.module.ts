// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientsComponent } from './clients/clients.component';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientRegistrationComponent } from './client-registration/client-registration.component';  // Import ClientRegistrationComponent

const routes: Routes = [
  { path: 'clients', component: ClientsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'meetings', component: MeetingsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: ClientRegistrationComponent },  // Add the route for ClientRegistrationComponent
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
