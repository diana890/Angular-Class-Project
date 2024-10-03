import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {User} from "./Shared/Modules/user";
import {JsonPipe, NgForOf} from "@angular/common";
import {StudentListComponent} from "./student-list/student-list.component";

@Component({
  selector: 'app-root',
  standalone: true,

  templateUrl: './app.component.html', imports: [RouterOutlet, NgForOf, JsonPipe, StudentListComponent, RouterLink, RouterLinkActive],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'User Generation';


}
