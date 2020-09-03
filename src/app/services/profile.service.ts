import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private apiKey:'aad4fe0f9d82d3b2811b1792f341534f0ba16951';
  constructor( private http:HttpClient) {
    console.log("Service is now ready");
    this.username = 'Martha-Valary';
   }
   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?apiKey=" + this.apiKey)
     
   }
   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?apiKey=" + this.apiKey)
   }
   updateProfile(username:string){
     this.username = username;
   }
}
