import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { NewAdminDialogComponent } from '../new-admin-dialog/new-admin-dialog.component';

@Component({
  selector: 'app-super-admin-dashboard',
  templateUrl: './super-admin-dashboard.component.html',
  styleUrls: ['./super-admin-dashboard.component.css']
})
export class SuperAdminDashboardComponent {
  admins: any = [];

  constructor(private service: ApiService, private route: ActivatedRoute, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllAdmins();
  }

  openNewAdminDialog(): void {
    const dialogRef = this.dialog.open(NewAdminDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result != null)
        this.admins.push(result);
    });
  }

  getAllAdmins() {
    this.service.getAllAdmins().subscribe(res => {
      this.admins = res;
      console.log(this.admins);
    }, err => {
      console.log(err);
      if (err.status == 403) {
        this.router.navigate(['unauthorized']);
      }
    });
  }

  deleteAdmin(admin: any) {
    this.service.deleteAdmin(admin.email).subscribe(res => {
      const index = this.admins.indexOf(admin);
      this.admins.splice(index, 1);
    });

  }
}
