import { Injectable, Post, Req } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({

    
})

export class authService{
    constructor(private prisma: PrismaService){

    }
    signup (){
        
        return {msg: 'hello new sign up'}
    }

    signin(){
        return 'i am sign in new'
    }
    
    
} 