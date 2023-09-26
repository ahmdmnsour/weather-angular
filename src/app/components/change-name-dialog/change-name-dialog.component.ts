import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-change-name-dialog',
  templateUrl: './change-name-dialog.component.html',
  styleUrls: ['./change-name-dialog.component.css']
})
export class ChangeNameDialogComponent {
  name: string = '';
  
  constructor(private service: ApiService, private dialogRef: MatDialogRef<ChangeNameDialogComponent>) { }


  submit() {
    const updatedData = {
      "name": this.name,
      "password": null
    };

    this.service.updateUser(updatedData)
      .subscribe(res => {
        console.log(res);
        this.dialogRef.close(res);
      });
  }

}
