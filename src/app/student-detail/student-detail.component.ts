import {Component, Input, OnInit} from '@angular/core';
import {User} from "../Shared/Modules/user";
import {NgIf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {StudentService} from "../Services/student.service";


@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss'
})
export class StudentDetailComponent implements OnInit{

  student: User | undefined;
  userList: User[] = [];
  currentIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService

  ) {}


    ngOnInit(): void {
      this.studentService.getStudents().subscribe(users => {
        this.userList = users;

        // Subscribe to paramMap changes to actually see the page changing
        //If we dont do this, the URL will change but the view will not
        this.route.paramMap.subscribe(params => {
          const id = Number(params.get('id'));
          if (id) {
            this.currentIndex = this.userList.findIndex(user => user.id === id);
            this.student = this.userList[this.currentIndex];
          }
        });
      });
    }





}
