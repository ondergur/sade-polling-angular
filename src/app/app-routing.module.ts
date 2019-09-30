import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PollFormComponent } from './poll/poll-form/poll-form.component';
import { PollListComponent } from './poll/poll-list/poll-list.component';
import { PollDetailComponent } from './poll/poll-detail/poll-detail.component';
import { PollAnswerComponent } from './poll/poll-answer/poll-answer.component';

const routes: Routes = [
 {
  path: 'create-poll',
  component: PollFormComponent,
  data: { title: 'Create Poll' }
},
{ path: '',
  redirectTo: '/create-poll',
  pathMatch: 'full'
},
{ path: 'polls',
  component: PollListComponent,
  data: { title: 'List of All Polls'}
},
{ path: 'poll/:id',
component: PollDetailComponent
},
{ path: 'poll-answer/:id',
  component: PollAnswerComponent
}
/*,
{ path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
