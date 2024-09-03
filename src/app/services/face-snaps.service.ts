import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";
import { HttpClient } from "@angular/common/http";
import { concat, concatMap, map, Observable, switchMap } from "rxjs";

@Injectable({
  providedIn: 'root',
})


export class FaceSnapService {
  private apiUrl = 'http://localhost:3000/facesnaps';

  constructor(private http: HttpClient) {}

   faceSnaps: FaceSnap[] = [];


  getFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>(`${this.apiUrl}`);
  }

  getFaceSnapsById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`${this.apiUrl}/${faceSnapId}`);

  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
    return this.getFaceSnapsById(faceSnapId).pipe(
        map(faceSnap => ({
            ...faceSnap,
            snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
        })),
        switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
            `${this.apiUrl}/${faceSnapId}`,
            updatedFaceSnap)
        )
    );
}

addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
  return this.getFaceSnaps().pipe(
       map(facesnaps => [...facesnaps].sort((a,b) => a.id - b.id)), //trier le tableau
       map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]), // prendre le dernier
       map(previousFacesnap => ({// ajouter un au id et recuperr les données 
        id: previousFacesnap.id + 1,  
        ...formValue,
          createdAt: new Date(),
          snaps: 0,
          
      })),
      concatMap(newFacesnap => this.http.post<FaceSnap>(
          `${this.apiUrl}`,
          newFacesnap)
      )
  );
}

}

