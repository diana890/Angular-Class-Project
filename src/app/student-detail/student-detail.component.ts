import {Component, Input} from '@angular/core';
import {User} from "../Shared/Modules/user";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss'
})
export class StudentDetailComponent {


  @Input() student?:User;
}
