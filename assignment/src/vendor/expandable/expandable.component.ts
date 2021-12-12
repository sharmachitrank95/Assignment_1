import { Component } from '@angular/core';

export interface IVendor{
    name:string,
    invoice:{
        invoiceNo:string,
        invoiceType:string,
        restaurant:string,
        breakDown:{
            subtotal:number,
            tax:number,
        },
        postingdDate:Date,
        InvoiceDate:Date,
        DueDate:Date,
        Total:number,
    },
    memo:string
}
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
export interface Tile {
    cols: number;
    rows: number;
    text: any;
    label: string;
    layout:number;
    class?:string
  }

@Component({
  selector: 'expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss']
})


export class ExpandableComponent {
    public vendor:IVendor = {
        name : "Freuesia Cheese",
        invoice:{
            invoiceNo:"00003526",
            invoiceType:"Receipt",
            restaurant:"Monty's Cheese Shop",
            breakDown:{
                subtotal:1300.00,
                tax:26.32
            },
            postingdDate: new Date("Jul 14, 2017"),
            InvoiceDate:new Date("Jul 09, 2017"),
            DueDate:new Date("Sep 09, 2017"),
            Total:10000.00
        },
        memo:""
    }
    public isExpandanded:boolean= false;
    public memo:string ="";

    public tiles:Tile[]=[
        { label: 'INVOICE NO.', text: this.vendor.invoice.invoiceNo, cols: 1, rows: 2, layout:1 , class:"main-tile" },
        { label: 'INVOICE TYPE', text: this.vendor.invoice.invoiceType, cols: 1, rows: 2, layout:1 , class:"main-tile" },
        { label: 'RESTAURANT', text: this.vendor.invoice.restaurant, cols: 1, rows: 2, layout:1 , class:"main-tile" },
        { label: 'SUBTOTAL', text: this.vendor.invoice.breakDown.subtotal, cols: 1, rows: 1, layout:0 , class:"main-tile"},
        { label: 'TAX', text: this.vendor.invoice.breakDown.tax, cols: 1, rows: 1, layout:0 },
        { label: 'POSTING DATE', text: this.formatDate(this.vendor.invoice.postingdDate), cols: 1, rows: 2, layout:1, class:"main-tile"  },
        { label: 'INVOICE DATE', text: this.formatDate(this.vendor.invoice.InvoiceDate), cols: 1, rows: 2, layout:1, class:"main-tile" },
        { label: 'DUE DATE', text: this.formatDate(this.vendor.invoice.DueDate), cols: 1, rows: 2, layout:1, class:"main-tile"  },
        { label: 'TOTAL', text: this.vendor.invoice.Total, cols: 1, rows: 2 , layout:0, class:"main-tile"},
    ]


    formatDate(date:Date):string{
        return monthNames[date.getMonth()] + " "+ date.getDate()+", "+date.getFullYear();
    }
}
