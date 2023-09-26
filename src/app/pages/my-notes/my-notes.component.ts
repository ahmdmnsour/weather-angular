import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { NewNoteDialogComponent } from '../new-note-dialog/new-note-dialog.component';

@Component({
  selector: 'app-my-notes',
  templateUrl: './my-notes.component.html',
  styleUrls: ['./my-notes.component.css']
})
export class MyNotesComponent {
  notes: any = [];
  predefinedNotes: any = [];

  role: string = '';

  constructor(private service: ApiService, private route: ActivatedRoute, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.getMyNotes();
    this.role = localStorage.getItem('ROLE') || '';
  }

  getMyNotes() {
    this.service.getMyNotes().subscribe(res => {
      this.notes = res;
      console.log(this.notes);
    }, err => {
      console.log(err);
      if (err.status == 403) {
        this.router.navigate(['unauthorized']);
      }
    });
  }

  openNewNoteDialog(): void {
    const dialogRef = this.dialog.open(NewNoteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result != null)
        this.notes.push(result);
    });
  }

  // getMyPredefined() {
  //   this.service.getAllNotes().subscribe(res => {
  //     this.predefinedNotes = res;
  //     console.log(this.predefinedNotes);
  //   }, err => {
  //     console.log(err);
  //     if (err.status == 403) {
  //       this.router.navigate(['unauthorized']);
  //     }
  //   });
  // }

}
