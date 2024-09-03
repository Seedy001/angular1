import { SnapType } from "./snap-type.type";

export class FaceSnap {

  location?: string;
  id!: number;
  constructor(public title: string,
              public description: string,
              public imageUrl: string,
              public createdAt: Date,
              public snaps: number) {
    
      }


  addSnap(): void {
    this.snaps++;
  }

  removeSnap(): void {
    this.snaps--;
  }

  snap(snapType:SnapType){
    if(snapType === 'snap'){
      this.addSnap();
    }else if (snapType === 'unsnap'){
      this.removeSnap();
    }
  }
  
  setlocation(location: string): void {
    this.location = location;
  }

  withlocation(location: string): FaceSnap {
    this.setlocation(location);
    return this;
  }

}