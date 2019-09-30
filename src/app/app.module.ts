import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { PollFormComponent } from './poll/poll-form/poll-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule,
         MatCardModule,
         MatButtonModule,
         MatToolbarModule,
         MatExpansionModule,
         MatButtonToggleModule,
         MatIconModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { HeaderComponent } from './header/header.component';
import { PollListComponent } from './poll/poll-list/poll-list.component';
import { QuestionFormComponent } from './poll/poll-form/question-form/question-form.component';
import { TestChoiceComponent } from './poll/poll-form/question-form/test-form/test-choice/test-choice.component';
import { TestFormComponent } from './poll/poll-form/question-form/test-form/test-form.component';
import { QuestionComponent } from './question/question.component';
import { PollDetailComponent } from './poll/poll-detail/poll-detail.component';
import { PollAnswerComponent } from './poll/poll-answer/poll-answer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PollFormComponent,
    PollListComponent,
    QuestionFormComponent,
    TestChoiceComponent,
    TestFormComponent,
    QuestionComponent,
    PollDetailComponent,
    PollAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
