import { Injectable } from '@angular/core';
import {User} from "../Shared/Modules/user";
import {userList} from "../Shared/mockStudent.data";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  private students: User[]= userList;

  getStudents(): Observable<User>{
    return of (userList)
  }

}
