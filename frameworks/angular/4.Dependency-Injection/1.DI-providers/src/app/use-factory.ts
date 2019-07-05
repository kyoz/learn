import { Component, Inject, Injectable, InjectionToken } from '@angular/core';

export class Course {
  constructor(
    public name: string,
    public category: string
  ) {}
}

const courses: Course[] = [
  { name: 'Angular 2', category: 'angular' },
  { name: 'Angular 3', category: 'angular' },
  { name: 'Angular 4', category: 'angular' },
  { name: 'React', category: 'react' },
  { name: 'React Native', category: 'react' },
  { name: 'Vue 1', category: 'vue' },
  { name: 'Vue 2', category: 'vue' }
]

const courseBook = new Course('Angular js', 'angular');

@Injectable()
export class CourseService {
  getAllCourse(): Course[] {
    return courses;
  }
}

export const PREFERED_COURSES = new InjectionToken<string>('token description');

export function preperredCoursesFactory(count: number) {
  console.log('access function preperredCoursesFactory');
  return (myCourse: Course, courseService: CourseService): String => {

    console.log({ myCourse, courseService });
    return courseService.getAllCourse()
      .filter(course => course.category === myCourse.category)
      .map(course => course.name)
      .slice(0, Math.max(0, count)).join(' | ');
  }
}

@Component({
  selector: 'use-factory',
  template: '{{ preferredCourses }}',
  providers: [
    CourseService,
    { provide: Course, useValue: courseBook },
    {
      provide: PREFERED_COURSES,
      useFactory: preperredCoursesFactory(4),
      deps: [Course, CourseService]
    }
  ]
})
export class UseFactoryComponent {
  constructor(@Inject(PREFERED_COURSES) private preferredCourses: string) { }
}

