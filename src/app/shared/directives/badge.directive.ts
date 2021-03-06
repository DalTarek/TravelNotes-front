import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

@Directive({
  selector: '[appBadge]'
})
export class BadgeDirective implements OnInit {
// private property to store travel value
  private _travel: any;

  /**
   * Component constructor
   */
  constructor(private _el: ElementRef, private _rd: Renderer2) {
  }

  /**
   * Sets private property _person
   */
  @Input()
  set travel(travel: any) {
    this._travel = travel;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    of(this._travel)
      .pipe(
        filter(_ => !!_ )
      )
      .subscribe(_ =>
        this._rd.setProperty(this._el.nativeElement, 'innerHTML', '<i class="material-icons">supervisor_account</i>'));
  }
}
