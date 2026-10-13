import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})

//request data from url
export class CourseService {
  private coursesUrl = 'https://webbutveckling.miun.se/files/ramschema.json';

  constructor(private http: HttpClient) {}

  //list of courses from req.
  //makes req. + return course data
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.coursesUrl);
  }
}
