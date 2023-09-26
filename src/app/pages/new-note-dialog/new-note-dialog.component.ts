import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api/api.service';
import { NewAdminDialogComponent } from '../new-admin-dialog/new-admin-dialog.component';

@Component({
  selector: 'app-new-note-dialog',
  templateUrl: './new-note-dialog.component.html',
  styleUrls: ['./new-note-dialog.component.css']
})
export class NewNoteDialogComponent {
  note: string = '';
  noteData = {};

  constructor(private service: ApiService, private dialogRef: MatDialogRef<NewNoteDialogComponent>) { }


  onSubmit() {
    this.noteData = {
      "note": this.note
    };

    this.service.createNote(this.noteData)
      .subscribe(res => {
        console.log(res);
        this.dialogRef.close(res);

      });
  }

}
