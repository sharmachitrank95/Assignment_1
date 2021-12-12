import { Component } from '@angular/core';

export interface ILineItem{
    name:{
        value1:string,
        value2:string
    },
    quantity:number,
    unitPrice:number,
    total:number
}

@Component({
  selector: 'line-item',
  templateUrl: './lineItem.component.html',
  styleUrls: ['./lineItem.component.scss']
})


export class LineItemComponent {

    public dataSource:ILineItem[] = [
        {name:{value1:'Gruyere-greyezer', value2:'Dairy 4410-6680'},quantity:3,unitPrice:1.00,total:328.07},
        {name:{value1:'Gruyere-greyezer', value2:'Dairy 4410-6680'},quantity:3,unitPrice:1.00,total:328.07},
        {name:{value1:'Gruyere-greyezer', value2:'Dairy 4410-6680'},quantity:3,unitPrice:1.00,total:328.07},
        {name:{value1:'Gruyere-greyezer', value2:'Dairy 4410-6680'},quantity:3,unitPrice:1.00,total:328.07}
    ]

    public displayedColumns: string[] = ['name', 'quantity', 'unitPrice', 'total'];
}
