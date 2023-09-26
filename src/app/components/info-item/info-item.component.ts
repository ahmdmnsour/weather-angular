import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordDialogComponent } from '../change-password-dialog/change-password-dialog.component';
import { ChangeNameDialogComponent } from '../change-name-dialog/change-name-dialog.component';

@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.css']
})
export class InfoItemComponent {
  @Input() attribute: string = '';
  @Input() value: string = '';
  @Input() editable!: boolean;
  @Input() isPassword!: boolean;

  @Output() saved = new EventEmitter<any>();

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    if (this.isPassword) {
      this.value = '********';
    }
  }

  edit() {
    if (this.isPassword) {
      const dialogRef = this.dialog.open(ChangePasswordDialogComponent);
      
    } else {
      const dialogRef = this.dialog.open(ChangeNameDialogComponent);
      dialogRef.afterClosed().subscribe(result => {
        if (result != null) {
          this.value = result.name;
        }
      });
    }

  }

}
