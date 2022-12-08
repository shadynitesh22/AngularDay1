import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, Validators } from '@angular/forms';

import { FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { CsvService } from "../csv.service";




@Component({
    selector: "app-add-order",
    templateUrl: "./add_order.component.html",
    styleUrls: ["./add_order.component.css"],
})



export class AddOrderComponent implements OnInit {



    add_order_form: FormGroup;
    fileName = "NewOrders.xlsx";
    headers: any = ["Order ID", "Order Date", "Order Amount", "Item Name"];
    global_dat :any = []; 
    public get_json_val :any;
    public post_json_val :any ;

    constructor(private router: Router, private csv_service: CsvService,private htttp : HttpClient) { }

    ngOnInit() {

        this.add_order_form = new FormGroup({
            order_id: new FormControl("", [Validators.required, Validators.maxLength(10)]),
            order_date: new FormControl("", [Validators.required]),
            order_amount: new FormControl("", [Validators.required, Validators.maxLength(10)]),
            item_name: new FormControl("", [Validators.required, Validators.maxLength(10)]),


        })



        //    var a =  JSON.parse(this.add_order_form.value);

    }
    save_order() {
        const headers_new = []
        const values = []
     
     

        const a = JSON.stringify(this.add_order_form.value);

        const json_parsed = JSON.parse(a);


        for (var key in json_parsed){
            // console.log("key",key);
            headers_new.push(key);
           const value =  json_parsed[key]
        //    console.log("value",value);
           values.push(value);
            
        }
        
     
        this.global_dat = [json_parsed]
        // console.log("global_dat",this.global_dat);
        this.csv_service.csDownload(this.headers, this.global_dat);   
     


    }
    public get_data(){
        this.htttp.get('http://localhost:8000/parties').subscribe((data) =>{
            console.log("data",data);
            

        });

        
    }


}

