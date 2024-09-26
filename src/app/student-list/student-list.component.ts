import { Component } from '@angular/core';
import {User} from "../Shared/Modules/user";
import {NgForOf} from "@angular/common";
import {StudentDetailComponent} from "../student-detail/student-detail.component";


@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [NgForOf, StudentDetailComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'department', 'isAdmin'];
  userList:User[]=[];




  //Catch the onclick event from the html
  selectedStudent?: User;

  //function to set which student to display
  selectStudent(student: User): void {
    this.selectedStudent = student;
  }
}
