import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AuthService } from './auth.service';
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector){}
  intercept(req, next) {
    let authService = this.injector.get(AuthService);
    if(localStorage.getItem('token')!=null){
      let tokenizedReq = req.clone(
        {
          headers: req.headers.set('token',authService.getToken())
        }
      )
      return next.handle(tokenizedReq)
    } else {
      return next.handle(req)
    }
  }

}