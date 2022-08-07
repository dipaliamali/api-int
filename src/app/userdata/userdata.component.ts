import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { InfoService } from '../info.service';
@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  user:any;

  constructor(private data:InfoService , private route:Router) { }

  ngOnInit(): void {
    this.userData()
  }
  
userData(){
  this.data.getData().subscribe((res:any)=>{
    this.user=res.data;
  })

}

delete_btn_fun(id:any)
  {
   this.data.deleteData(id).subscribe((res:any)=>{
    console.log(res);
      });
      this.userData()
    }


    

addData()
{
  this.route.navigate(['/regform']);


  

}
// deleteData()
// {
//   this.route.navigate(['/delete']);

// }
}
