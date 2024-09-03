import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from "../face-snap/face-snap.component";
import { HeaderComponent } from '../header/header.component';
import { FaceSnapService } from '../services/face-snaps.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
    FaceSnapComponent,
    HeaderComponent,
    HttpClientModule
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>;


  constructor(private faceSnapsService: FaceSnapService) { }


  ngOnInit() {
    this.faceSnaps$ = this.faceSnapsService.getFaceSnaps();
  }

}