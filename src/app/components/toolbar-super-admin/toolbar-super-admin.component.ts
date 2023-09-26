
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-toolbar-super-admin',
  templateUrl: './toolbar-super-admin.component.html',
  styleUrls: ['./toolbar-super-admin.component.css']
})
export class ToolbarSuperAdminComponent {

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }
}
