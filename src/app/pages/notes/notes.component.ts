import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  notes: any = [];
  predefinedNotes: any = [];

  constructor(private service: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getAllNotes();
  }

  getAllNotes() {
    this.service.getAllNotes().subscribe(res => {
      this.notes = res;
      console.log(this.notes);
    }, err => {
      console.log(err);
      if (err.status == 403) {
        this.router.navigate(['unauthorized']);
      }
    });
  }

  getAllPredefined() {
    this.service.getAllNotes().subscribe(res => {
      this.predefinedNotes = res;
      console.log(this.predefinedNotes);
    }, err => {
      console.log(err);
      if (err.status == 403) {
        this.router.navigate(['unauthorized']);
      }
    });
  }
}
