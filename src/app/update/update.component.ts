import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { filter, flatMap, map } from 'rxjs/operators';
import { TravelsService } from '../shared/services/travels.service';
import {Travel} from '../shared/interfaces/travel';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: [ './update.component.css' ]
})
export class UpdateComponent implements OnInit {
  // private property to store dialog reference
  private _travelsDialog: MatDialogRef<DialogComponent>;

  /**
   * Component constructor
   */
  constructor(private _route: ActivatedRoute, private _router: Router, private _travelsService: TravelsService,
              private _dialog: MatDialog) {
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this._route.params
      .pipe(
        map((params: any) => params['id']),
        flatMap((id: string) => this._travelsService.fetchOne(id))
      )
      .subscribe((travel: Travel) => {
        this._travelsDialog = this._dialog.open(DialogComponent, {
          width: '500px',
          disableClose: true,
          data: travel
        });

        // subscribe to afterClosed observable to set dialog status and do process
        this._travelsDialog.afterClosed()
          .pipe(
            filter(_ => !!_),
            flatMap(_ => this._travelsService.update(_))
          )
          .subscribe(null, null, () => this._router.navigate([ '/travels' ]));
      });
  }
}
