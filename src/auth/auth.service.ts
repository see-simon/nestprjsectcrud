import { Injectable, Post } from "@nestjs/common";

@Injectable({

    
})

export class authService{
   
    signup (){
        return {msg: 'hello new sign up'}
    }

    signin(){
        return 'i am sign in new'
    }
    
    
} 