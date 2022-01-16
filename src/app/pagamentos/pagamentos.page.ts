import { Component, OnInit } from '@angular/core';
import { PagSeguroService } from '../services/pag-seguro.service';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';

declare let PagSeguroDirectPayment;

export interface Item {
  id: string;
  email: string;
  token: string;
  isSandbox: boolean;
  sessionId: string;
  urlTransacao: string;
  urlPagSeguroDirectPayment: string;
  numCard: string;
  bandCard: string;

}

export class Dados {
  public id: number;
  public nome: string;
  public telefone: string ;
  public email: string ;
  public cpf: string ;
  public nascimento: string;
  public logradouro : string ;
  public numero: string;
  public bairro: string;
  public cep: string;
  public cidade : string;
  public estado: string;
  public numCard:  number;
  public mesValidadeCard: number;
  public anoValidadeCard: number;
  public codSegCard: number;
  public amount: number;
  public hashComprador: string;        // preenchido dinamicamente
  public bandCard: string;             // preenchido dinamicamente
  public hashCard: string; 
  public referencia: string;  
  public ddd: number; 
  public sobrenome: string;     
  public noInterestInstallmentQuantity: number;      // preenchido dinamicamente
  public parcelas: Array<Object> = []; // preenchido dinamicamente
  constructor(obj?) {
    Object.assign(this, obj, {}, {});
  }
}

const ITEMS_KEY = 'credencial';

@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.page.html',
  styleUrls: ['./pagamentos.page.scss'],
})
export class PagamentosPage implements OnInit {
  sessionId: string;
  ionicForm: FormGroup;
  defaultDate = '01/01/2021';
  isSubmitted = false;
  parcelas = [];
  estados = [];
  credencial: Item;
  dados = new Dados();
  thumbnail: string;

  credenciais: Item = {
    id: 'credenciais',
    email: 'vinassis@gmail.com',
    token: '90FFE24A8F314FD98F0F29712BE30EEB',
    isSandbox: true,
    sessionId: '',
    urlTransacao: 'https://ws.sandbox.pagseguro.uol.com.br/v2/transactions/',
    urlPagSeguroDirectPayment: 'https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js',
    numCard: '',
    bandCard: ''
  };

  constructor(private pagseg: PagSeguroService,
              private storage: Storage,
              public formBuilder: FormBuilder, 
              private common: CommonService,
    ) {

      this.ionicForm = this.formBuilder.group({
      numCard: ['4111111111111111', [Validators.required, Validators.pattern('^[0-9]+$')]],
      mesValCard: ['03', [Validators.required, Validators.pattern('^[0-9]+$')]],
     // [Validators.maxLength(2), Validators.required, Validators.pattern('^[0-9]+$')]] ,
      anoValCard: ['2026', [Validators.required, Validators.pattern('^[0-9]+$')]],
      // [Validators.maxLength(4), Validators.required, Validators.pattern('^[0-9]+$')]] ,
      codSegCard: ['123', [Validators.required, Validators.pattern('^[0-9]+$')]],
      // [Validators.maxLength(3), Validators.required, Validators.pattern('^[0-9]+$')]] ,
      fone: ['991495618', [Validators.required, Validators.pattern('^[0-9]+$')]],
      ddd: ['11', [Validators.required, Validators.pattern('^[0-9]+$')]], 
      // [Validators.pattern('^[0-9]+$')]] ,
      cpf: ['22743910178', [Validators.required, Validators.pattern('^[0-9]+$')]],
      // [Validators.maxLength(3), Validators.required, Validators.pattern('^[0-9]+$')]] ,
      nome: ['Jose ', [Validators.required]],
      sobrenome: ['da Silva', [Validators.required]], 
      // [Validators.required, Validators.minLength(2)]],
      logradouro: ['Pedro Inacio'],
      // [Validators.required]],
      numero: ['201'],
      // [Validators.pattern('^[0-9]+$')]] ,
      cidade: ['São Paulo'],
      // [Validators.required]],
      estado: ['SP'],
      // [Validators.required]],
      bairro: ['centro'],
      // [Validators.required]],
      cep: ['05386330'],
       // [Validators.maxLength(8),Validators.pattern('^[0-9]+$')]] ,
      parcelas: ['', [Validators.required]],
      valor: ['',  [Validators.required] ],
      email: ['wagfreitas@hotmail.com'],
      // [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      dtNasc: [this.defaultDate],
    });


  }


  ngOnInit() {

    this.pagseg.carregaEstados().subscribe(res => {
      res["geonames"].forEach(element => {
       this.estados.push(element.name);
      });
     
    })
    console.log("estados", this.estados)

    this.storage.create();
    this.dados.referencia = localStorage.getItem('User'); 
    console.log('referencia', this.dados.referencia)
    this.thumbnail = '../../assets/icon/card.png';
    this.pagseg.obterIdSession(this.credenciais).subscribe(res => {
      this.sessionId = res.session.id;
      this.pagseg.carregaPagSeguroDirectPayment(this.credenciais).then(() => {
            PagSeguroDirectPayment.setSessionId(this.sessionId);
            this.credenciais.sessionId = this.sessionId;
          });

    });

    

  }


  async addCredential(item: Item): Promise<any> {

    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
        if (items) {
          items.push(item);
          console.log('items', items);
          return this.storage.set(ITEMS_KEY, items);
        } else {
          return this.storage.set(ITEMS_KEY, [item]);
        }
    });
  }

  async getCredential(): Promise<any> {
    return this.storage.get(ITEMS_KEY);
  }

  buscaBandeira(value) {
    //   console.log('entramos aqui ', value.target.value)
    const numCard = this.ionicForm.value.numCard;
    PagSeguroDirectPayment.setSessionId(this.sessionId);
    PagSeguroDirectPayment.getBrand({
      cardBin: numCard,
      success: (response) => {
        this.credenciais.bandCard = response.brand.name;
        this.dados.bandCard = response.brand.name;
        if (this.credenciais.bandCard === 'mastercard') {
          this.thumbnail = '../../assets/icon/Mastercard.png';
        } else if (this.credenciais.bandCard === 'visa') {
          this.thumbnail = '../../assets/icon/visa.png';
        } else if (this.credenciais.bandCard === 'elo'){
          this.thumbnail = '../../assets/icon/elo.png'
        }else {
          this.thumbnail = '../../assets/icon/card.png';
        }
        console.log('Bandeira do cartão: ' + this.credenciais.bandCard);
        this.buscaParcelas(this.credenciais);

      },
      error: (response: any) => { console.log('buscaBandeira', response); }
    });
  }

  // VERIFICA QUAL BANDEIRA FOI INFORMADA PELO CLIENTE AO DIGITAR OS DADOS DO CARTÃO E RETORNA AS
  // PARCELAS DISPONPIVEIS E VAI BUSCAR AS PARCELAS NA API DO PAGSEGURO PARA O CLIENTE ESCOLHER

  async buscaParcelas(dados: any) {
    
    this.dados.numCard = this.ionicForm.value.numCard;
    const val  = this.ionicForm.value.valor;
    console.log('dados', dados);
    this.dados.amount = val.replace(',', '.');
    //  this.dados.bandCard = dados.numCar
    await PagSeguroDirectPayment.getInstallments({
      amount: val.replace(',', '.'),    // valor total da compra (deve ser informado)
      maxInstallmentNoInterest: 16, // número de parcelas sem juros
      brand: this.dados.bandCard, // bandeira do cartão (capturado na função buscaBandeira)
           success: (response) => {
        dados.parcelas = response.installments[dados.bandCard];
        this.parcelas = dados.parcelas;
        this.parcelas["installmentAmount"] = parseFloat(this.parcelas["installmentAmount"]).toFixed(2);
       // console.log('parcelas: ' + JSON.stringify(response.installments[dados.bandCard]));
      },
      error: (response: any) => { console.log('buscaParcelas', response); }
    });
  }

  // INICIA OS PROCESSOS PARA QUE SEJA REALIZADO O PAGAMENTO
  // AO CLICAR NO BOTÃO PAGAR
  pagar() {

    // BUSCA O HASH DO COMPRADOR JUNTO A API DO PAGSEGURO
    this.dados.hashComprador = PagSeguroDirectPayment.getSenderHash();

    console.log("dados no pagar", this.dados)

    //console.log("hash", this.dados.hashComprador)
    // CRIA O HASK DO CARTÃO DE CRÉDITO JUNTO A API DO PAGSEGURO

   
    PagSeguroDirectPayment.createCardToken({
      cardNumber: this.dados.numCard,
      brand: this.dados.bandCard,
      cvv: this.dados.codSegCard,
      expirationMonth: this.dados.mesValidadeCard,
      expirationYear: this.dados.anoValidadeCard,
      success: response => {
        this.dados.hashCard = response.card.token;
        console.log('Hash do cartao', this.dados);

        // NESTE MOMENTO JÁ TEMOS TUDO QUE PRECISAMOS!
        // HORA DE ENVIAR OS DADOS PARA O SERVIDOR PARA CONCRETIZAR O PAGAMENTO
        this.enviaDadosParaServidor();

      },
      error: response => { console.log('erro recebido', response); }
    });

  }

  // DISPARA OUTROS MÉTODOS PARA PODER CONSUMIR A API DO PAGSEGURO E CONCRETIZAR A TRANSAÇÃO
  enviaDadosParaServidor() {
    this.pagarCheckoutTransp(this.dados);
    // .subscribe(result => console.log(result));
  }



  // MÉTODO QUE FAZ O CONSUMO COM TODOS OS DADOS NECESSÁRIOS PELA API
  // COM A FINALIDADE DE EFETUAR O PAGAMENTO
  public pagarCheckoutTransp(dados: Dados) {

  const valparcelas = this.dados.parcelas[0]['installmentAmount'];
  const  pagDados =  {
      email: 'vinassis@gmail.com', // email da conta que vai receber
      data: {
          payment: {
              mode: 'default',
              method: 'creditCard',
              sender: {
                  hash: this.dados.hashComprador,
                  name: this.dados.nome + '' + this.dados.sobrenome, /// tem que ter nome e sobrenome
                  email: 'teste@sandbox.pagseguro.com.br', //email do pagador  
                  phone: {
                      areaCode: this.dados.ddd,
                      number: this.dados.telefone
                  },
                  documents: {
                      document: {
                          type: 'CPF',
                          value: this.dados.cpf,
                      }
                  }
              },
              currency: 'BRL',
              notificationURL: null,
              items: {
                  item: {
                      id: '1',
                      description: 'Manutenção de Portão',
                      quantity: '1',
                      amount: parseFloat(this.dados.amount.toString()).toFixed(2) 
                  }
              },
              extraAmount: '0.00',
              reference: this.dados.referencia,  // uma referencia do pagamento, email do técnico
              shipping: {
                  addressRequired: 'false'  // se tiver que entregar albuma coisa 
              },
              creditCard: {
                  token: this.dados.hashCard,
                  installment: {
                      quantity: this.dados.parcelas[0]['quantity'],
                      value: parseFloat(valparcelas).toFixed(2),
                      noInterestInstallmentQuantity: 16
                  },
                  holder: {
                      name: this.dados.nome + '' + this.dados.sobrenome,
                      documents: {
                          document: {
                              type: 'CPF',
                              value: this.dados.cpf
                          }
                      },
                      birthDate: this.dados.nascimento,
                      phone: {
                          areaCode: this.dados.ddd,
                          number: this.dados.telefone
                      }
                  },
                  billingAddress: {
                      street: this.dados.logradouro,
                      number: this.dados.numero,
                      complement: '',
                      district: this.dados.bairro,
                      city: this.dados.cidade,
                      state: this.dados.estado,
                      country: 'BRA',
                      postalCode: this.dados.cep
                  }
              }
          }
      }
    };
    console.log('body------', pagDados);

   this.pagseg.enviarPgto(pagDados).subscribe(res =>{
     console.log(res)
     if (res.transaction["code"]) {
        this.common.showToast("Pagamento Efetuado com Sucesso");
        this.ionicForm.reset();
     } else{
       this.common.showToast("Ocorreu um erro, verifique os dados");
     }
   })

   // this.http.post(url2, body, {headers: headers});
  }

  getDate(e: { target: { value: string | number | Date; }; }) {
   const date = new Date(e.target.value).toISOString().substring(0, 10);
   this.ionicForm.get('dtNasc').setValue(date, {
      onlyself: true
    });
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm(value: any) {
    console.log("valor recebido", value.dtNasc);
    const nascimento = value.dtNasc
    const ano = nascimento.substring(0, 4);
    const mes = nascimento.substring(5, 7)
    const dia = nascimento.substring(8, 10)
   const dtnasc = dia + "/" + mes + "/" + ano;
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      this.common.showToast("Verifique se todos os campos obrigatórios estão preenchidos, inclusive Parcelas");
      return false;
    } else {
      console.log("vamos para o pagamento")
      this.dados.codSegCard = value.codSegCard;
      this.dados.mesValidadeCard = value.mesValCard;
      this.dados.anoValidadeCard = value.anoValCard; 
      this.dados.parcelas = value.parcelas;
      this.dados.numCard = value.numCard;
      this.dados.telefone = value.fone;
      this.dados.cpf = value.cpf;
      this.dados.nome = value.nome;
      this.dados.logradouro = value.logradouro;
      this.dados.numero = value.numero;
      this.dados.cidade = value.cidade;
      this.dados.estado = value.estado;
      this.dados.bairro = value.bairro;
      this.dados.cep = value.cep;
      this.dados.email = value.email;
      this.dados.nascimento = dtnasc;
      this.dados.ddd = value.ddd; 
      this.dados.sobrenome = value.sobrenome; 

      console.log("dados", this.dados)
      this.pagar();
    }
  }

}


