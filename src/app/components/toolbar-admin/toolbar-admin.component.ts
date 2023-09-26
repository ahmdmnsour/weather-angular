import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-toolbar-admin',
  templateUrl: './toolbar-admin.component.html',
  styleUrls: ['./toolbar-admin.component.css']
})
export class ToolbarAdminComponent {
  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }

}
