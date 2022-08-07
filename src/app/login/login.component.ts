import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSubmitted: boolean = false;
  public myForm: any;

  constructor(private fb: FormBuilder, private router: Router, private info:InfoService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]]
    })
  }

  get f() {
    return this.myForm.controls;
  }

  onSubmitForm() {
    this.isSubmitted = true;

  this.info.userlogin(this.myForm.value).subscribe((res:any)=>{
    console.log(res);
  
    if(res.token=true){
      this.router.navigate(['userdata']) 
    }
   else
   {
    console.log(this.myForm.value);
    }
  
  },
  (err: any) => console.log(err)
);
  }
}
  
  
  

    
    // if (!this.myForm.valid) {
    //   console.log(this.myForm);
    //   console.log(this.myForm.value);
    
    // } else {
    //   this.router.navigate(['userdata'])
  
    




  
