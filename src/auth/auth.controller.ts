import { Controller, Post, Req } from "@nestjs/common";
import { authService } from "./auth.service";
import { Request } from "express";

@Controller('auth')

export class authController{

    //instantiate the auth service in node js

    constructor(private authservice: authService){
        
    }



    @Post('signup')
    signup (@Req() req: Request){
      console.log(req)


       return this.authservice.signin()
        
    }


    @Post('signin')
    signin(){
      return this.authservice.signup()
    }


}