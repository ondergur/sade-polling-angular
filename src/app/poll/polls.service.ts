import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Poll } from './poll.model';

@Injectable({
  providedIn: 'root'
})
export class PollsService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:5000/poll';

  getPolls() {
    return this.http.get<Poll[]>(this.url);
  }

  getPoll(id: number) {
    return this.http.get<Poll>(this.url + '/' + id);
  }

  addPoll(pollFormValue) {
    return this.http.post(this.url, pollFormValue).toPromise();
  }

}
