import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe,
    DecimalPipe,
    CurrencyPipe,
    PercentPipe,
    CommonModule
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {

  @Input() faceSnap!: FaceSnap;

  constructor(private router: Router){}

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }


}
