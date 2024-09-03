import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, tap } from 'rxjs';


@Component({
  selector: 'app-single-face-snap',
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
    RouterLink,
    CommonModule
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {


  faceSnap$!: Observable<FaceSnap>;
  snapButtonText!: string;

  constructor(private faceSnapsService: FaceSnapService,
              private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.snapButtonText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapsById(faceSnapId);

  }

  onSnap(faceSnapId: number) {
    if (this.snapButtonText === 'Oh Snap!') {
        this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
            tap(() => {
                this.faceSnap$ = this.faceSnapsService.getFaceSnapsById(faceSnapId);
                this.snapButtonText = 'Oops, unSnap!';
            })
        ).subscribe();
    } else {
        this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
            tap(() => {
                this.faceSnap$ = this.faceSnapsService.getFaceSnapsById(faceSnapId);
                this.snapButtonText = 'Oh Snap!';
            })
        ).subscribe();
    }
}

}
