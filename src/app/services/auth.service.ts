export class AuthService{
    isAuth = false
    signIn(){
        return new Promise(
            (resolve)=>{
              const date = new Date()
              setTimeout(
                ()=>{
                  this.isAuth = true;
                  resolve(true)
                },2000
              ) 
            }
          )
    }

    signOut(){
        this.isAuth = false
    }
}