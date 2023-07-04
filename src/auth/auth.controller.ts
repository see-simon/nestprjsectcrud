import { Controller, Post } from "@nestjs/common";
import { authService } from "./auth.service";

@Controller('auth')

export class authController{

    //instantiate the auth service in node js

    constructor(private authservice: authService){
        
    }

    @Post('signup')
    signup (){
       return this.authservice.signin()
        
    }


    @Post('signin')
    signin(){
      return this.authservice.signup()
    }


}