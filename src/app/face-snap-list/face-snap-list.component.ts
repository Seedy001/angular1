import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from "../face-snap/face-snap.component";
import { HeaderComponent } from '../header/header.component';
import { FaceSnapService } from '../services/face-snaps.service';


@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
    FaceSnapComponent,
    HeaderComponent
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit{
  faceSnaps!: FaceSnap[];
  constructor(private faceSnapsService: FaceSnapService) {}
  

  ngOnInit() {
    this.faceSnaps = this.faceSnapsService.getFaceSnaps();
  
  }
}
