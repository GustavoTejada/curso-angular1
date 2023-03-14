import { Injectable } from '@angular/core';
import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from '@firebase/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private moviesCollection: CollectionReference<DocumentData>;

  constructor(
    private firestore: Firestore
  ) {
    this.moviesCollection = collection(this.firestore, 'movies');
  }

  create(movie: any) {
    return addDoc(this.moviesCollection, movie)
  }

  getAll() {
    return collectionData(this.moviesCollection) as Observable<any[]>;
  }

  delete(id: number) {
    const moviesDocumentReference = doc(this.firestore, `movies/${id}`);
    return deleteDoc(moviesDocumentReference);
  }

}
