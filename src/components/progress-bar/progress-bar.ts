import { Component, Input } from '@angular/core';

/*
  Generated class for the ProgressBar component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {

  @Input()
  progress: number;

  @Input()
  min: number;

  @Input()
  max: number;


  @Input()
  avatar: string;


  constructor() {
  }

}
