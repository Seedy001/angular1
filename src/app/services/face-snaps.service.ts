import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";

@Injectable({
    providedIn: 'root'
}
)


export class FaceSnapService {
    private faceSnaps: FaceSnap[] = [
        new FaceSnap(
          'archibald ',
          'Mon meilleur ami depuis toujours !',
          'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          new Date(),
          10
        ),

        new FaceSnap(
          'Three Rock Mountain',
          'Un endroit magnifique pour les randonnées.',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
          new Date(),
       300
        ).withlocation('à la montagne'),

        new FaceSnap(
          'Un bon repas',
          'Mmmh que c\'est bon !',
          'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
          new Date(),
          156
        )
      ];


      getFaceSnaps(): FaceSnap[]{
        return[...this.faceSnaps];
      }

      snapFaceSnapById(faceSnapId: string): void {
        const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!foundFaceSnap) {
          throw new Error('FaceSnap not found!');
        }
        foundFaceSnap.addSnap();
    }
}

