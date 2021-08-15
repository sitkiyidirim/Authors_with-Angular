import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LibrarianLoginComponent } from "./librarian-login/librarian-login.component";

@Injectable()

export class LibrarianLoginControl implements CanActivate {
       
      control:string;
      isNotLogin:boolean=true;
            login:LibrarianLoginComponent=new LibrarianLoginComponent();
              constructor(){}
              
              canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
                   
                            if(this.control=='1234'){
                                          console.log('buraya erişti');
                                          this.isNotLogin=false;
                                   return true;
                     }else{
                                   this.login.errorC=true;

                                   console.log('ah canim buraya erişti');
                                   return false;
                     }
              }

}