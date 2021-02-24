import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id_number: 1,
                name: 'Angular',
                imgUrl: '/assets/images/angular.png',
                price: 99.99,
                code: 'XPS-4748',
                duration: 120,
                rating: 4,
                releaseDate: '2020-10-10'
            },
            {
                id_number: 2,
                name: 'Vue',
                imgUrl: '/assets/images/vue.png',
                price: 40,
                code: 'HPS-3030',
                duration: 160,
                rating: 2.5,
                releaseDate: '2020-10-15'
            }
        ]
    }
} 