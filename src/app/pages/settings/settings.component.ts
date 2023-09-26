import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  role: string = '';

  ngOnInit() {
    this.role = localStorage.getItem('ROLE') || '';

    this.service.getUserDetails().subscribe(res => {
      console.log(res);
      this.userDetails = res;
      this.name = this.userDetails['name'];
      this.email = this.userDetails['email'];
    });
  }

  editing: boolean = false;

  userDetails: any = {};
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private service: ApiService, private route: ActivatedRoute, private dialog: MatDialog) { }


  onEdit() {
    this.editing = !this.editing;
  }

}
