import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {
public produtos = []
  constructor(public prodServices: ProdutosService, public afs: AngularFirestore ) { }

  ngOnInit() {
    
      this.afs.collection("produtos").get().subscribe(res => {
        res.forEach(doc =>{
          this.produtos.push(doc.data());
        })

        console.log(this.produtos)
      })
     

  }

}
