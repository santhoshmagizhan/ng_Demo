import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title= 'Rdemo';
  selectedValue1: string="";
  selectedValue2: string="";
  selectedValue3: string="";
  imgwithprice :any =[];
  isImg = false;
  imgsrc ='https://www.nicomatic.com/themes/custom/jango_sub/img/no-image.png';
  products = [
    {
       "category":"TV",
       "company":"MI",
       "model":"Mi TV 4X 108 cm (43) Black",
       "price":"₹27,999",
       "imgurl":"http://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1587896173.03128019.png?width=200&height=200"
    },
    {
       "category":"TV",
       "company":"MI",
       "model":"Redmi Smart TV X55 138.8cm (55 inches) Black",
       "price":"₹40,999",
       "imgurl":"https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1615874580.28876836.png?width=200&height=200"
    },
    {
       "category":"TV",
       "company":"Sony",
       "model":"Sony Bravia 80 cm (32 inches) HD Ready Smart Android LED TV KD-32W820 (Black)",
       "price":"₹31,890",
       "imgurl":"https://m.media-amazon.com/images/I/81IYJG9LSgS._SX569_.jpg"
    },
    {
       "category":"TV",
       "company":"Amazon",
       "model":"AmazonBasics 109 cm (43 inches) 4K Ultra HD Smart LED Fire TV AB43U20PS (Black)",
       "price":"₹26,999",
       "imgurl":"https://m.media-amazon.com/images/I/71AqQyCMmeL._SX450_.jpg"
    },
    {
       "category":"Mobile",
       "company":"MI",
       "model":"Mi 11 Ultra 5G",
       "price":"₹69,999",
       "imgurl":"https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1619082747.31483931.png"
    },
    {
       "category":"Mobile",
       "company":"MI",
       "model":"Mi 11X 5G",
       "price":"₹28,999",
       "imgurl":"https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1619083766.95158400.png"
    },
    {
       "category":"Mobile",
       "company":"Vivo",
       "model":"Vivo V17 Pro",
       "price":"₹25,000",
       "imgurl":"https://m.media-amazon.com/images/I/61wjA957J6L._SY741_.jpg"
    },
    {
       "category":"Mobile",
       "company":"OnePlus",
       "model":"OnePlus Nord 2 5G",
       "price":"₹29,999",
       "imgurl":"https://m.media-amazon.com/images/I/61TnX0PmqES._SX679_.jpg"
    },
    {
       "category":"Laptop",
       "company":"MI",
       "model":"Mi Notebook 14 i5 8+256 UHD",
       "price":"₹41,999",
       "imgurl":"http://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1632306189.29356142.jpg?width=200&height=200"
    },
    {
       "category":"Laptop",
       "company":"MI",
       "model":"RedmiBook 15 Pro Charcoal Gray",
       "price":"₹44,999",
       "imgurl":"http://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1631697126.12232496.jpg?width=200&height=200"
    }
 ];

  categoryList = [];
  CompanyList = [];
  ModelList = [];

  selection1='uncheckmark';
  selection2='uncheckmark';
  selection3='uncheckmark';

  ngOnInit(): void{
   this.products.map((categ:any)=>{
   if(this.categoryList.indexOf(categ.category)=== -1)
   this.categoryList.push(categ.category);
   });
 }

  firstselect(){
    this.selection1='checkmark';
    this.selection2 =this.selection3 ='uncheckmark';
    this.CompanyList =[];
     this.ModelList = [];
     this.imgwithprice = [];
    this.selectedValue2 = this.selectedValue3 = '';
    this.products.map((complist:any)=>{
    if(complist.category === this.selectedValue1 && this.CompanyList.indexOf(complist.company)=== -1)
    {
    this.CompanyList.push(complist.company)
    }
    });
  }

  secondselect(){
    this.selection2='checkmark';
    this.selection3 ='uncheckmark';
    this.selectedValue3 = '';
    this.ModelList = [];
    this.imgwithprice = [];
    this.products.map((modellist:any)=>{
      if(modellist.category === this.selectedValue1 && modellist.company === this.selectedValue2 && this.CompanyList.indexOf(modellist.model)=== -1)
      {
      this.ModelList.push(modellist.model)
      }
      });
  }
  thirdselect(){
    this.selection3='checkmark';
    this.imgwithprice = this.products.filter((prodDetail:any)=> {return prodDetail.model === this.selectedValue3;});
    this.imgsrc = this.imgwithprice[0].imgurl;
    this.isImg  = true;
  }


  clearAll()
  {
    this.selection1= this.selection2 = this.selection3='uncheckmark';
    this.selectedValue1 = this.selectedValue2 = this.selectedValue3 = '';
    this.CompanyList = this.ModelList = this.imgwithprice = [];
    this.imgsrc ='https://www.nicomatic.com/themes/custom/jango_sub/img/no-image.png';
    this.isImg  = false;

  }
}
