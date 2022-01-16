import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private firestore: AngularFirestore ) { }

   getProdutos() { 
    return this.firestore.collection("produtos").snapshotChanges();
  }

}
