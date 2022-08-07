import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
user:any
  constructor(private info:InfoService, private route:Router) { }

  ngOnInit(): void {
  }
  delete_btn_fun(id:any)
  {
   this.info.deleteData(id).subscribe((res:any)=>{
    console.log(res);
      });
}
} 
  