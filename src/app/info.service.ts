import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InfoService {

public id=new BehaviorSubject(1);
public data=new BehaviorSubject('');

constructor(private http:HttpClient) { }

userlogin(data:any){
  return this.http.post ('https://reqres.in/api/login' , data);
}
    getData()
  {
    return this.http.get('https://reqres.in/api/users?page=1' );
  }
  postData(data:any) {
    return this.http.post('https://reqres.in/api/users',data);
  }

  editData(id: any, data: any) {
    return this.http.put( 'https://reqres.in/api/users/'+ id, data);
  }

  deleteData(id:any) {
    const finalapi ='https://reqres.in/api/users/' + id
    console.log(finalapi);
    return this.http.delete(finalapi);
   }
  }
  
 

