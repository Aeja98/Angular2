import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses',
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})

//load courses
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  searchText = '';

  sortColumn: keyof Course = 'code';
  sortAscending = true;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
        this.filterCourses();
      },
      error: (error) => {
        console.error('Could not load courses:', error);
      }
    });
  }

  //filter courses
  filterCourses(): void {
    const search = this.searchText.toLowerCase();

    this.filteredCourses = this.courses.filter(course =>
      course.code.toLowerCase().includes(search) ||
      course.coursename.toLowerCase().includes(search)
    );

    this.sortCourses();
  }

  //sort courses
  sortCourses(): void {
    this.filteredCourses.sort((a, b) => {
      const first = a[this.sortColumn];
      const second = b[this.sortColumn];

      const comparison = first.localeCompare(second, 'sv', {
        numeric: true
      });

      return this.sortAscending ? comparison : -comparison;
    });
  }

  changeSort(column: keyof Course): void {
    if (this.sortColumn === column) {
      this.sortAscending = !this.sortAscending;
    } else {
      this.sortColumn = column;
      this.sortAscending = true;
    }

    this.sortCourses();
  }
}
