import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-toolbar-user',
  templateUrl: './toolbar-user.component.html',
  styleUrls: ['./toolbar-user.component.css']
})
export class ToolbarUserComponent {
  
  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }
}
