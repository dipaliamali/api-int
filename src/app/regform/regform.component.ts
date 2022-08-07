import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { InfoService } from '../info.service';
@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {

  constructor(private fb: FormBuilder, private info: InfoService, private route: Router) { }
  public regForm: any;
  public user: any;
  userEdited:any;
  isSubmitted: boolean = false;
  public enableForm: boolean = true;
  public enableFormedit : boolean = false;
  displayData:boolean=false;
  displayDataAfterEdit:boolean=false;
  public id: any;

  ngOnInit(): void {

    this.regForm = this.fb.group({
      name: ['', [Validators.required]],
      job: ['', [Validators.required]],
    })
  }


  get f() {
    return this.regForm.controls;
  }

  onSubmitForm() {
    this.userData()
  }
  
  userData() {
    
    console.log(this.regForm.value);
    this.info.postData(this.regForm.value).subscribe(
      (res: any) => {
        if(res){
          console.log(res);
          this.user = [res];
          this.displayData=true;
        }
        
      },
      (err: any) => console.log(err)
    );


  }

  edit_btn_fun(id: any) {
    this.enableFormedit = true;
    this.enableForm = false;
    this.id = id
  }

  onSubmitFormUpdate(){
    this.info.editData(this.id,this.regForm.value).subscribe(
      (res: any) => {
        if(res){
        console.log(res);
        this.userEdited=[res];
      this.displayDataAfterEdit=true}
      }
    )
  }

  // delete_btn_fun(id:any)
  // {
  //  this.info.deleteData(id).subscribe((res:any)=>{
  //   console.log(res);
  //     });

// }









}



