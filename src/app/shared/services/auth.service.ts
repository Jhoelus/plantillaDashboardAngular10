import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsuarioBDD } from '../Modules/usuarioBDD';
import { map } from 'rxjs/operators'
import { User } from '../Modules/usuario';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:AngularFireAuth, private  fireStore:AngularFirestore) { }

  initAuthListener () {
    this.auth.authState.subscribe( user => {
      console.log(user?.uid)
      console.log(user?.email)
    })
  }

  createUser(userAuth:User) {
   return this.auth.createUserWithEmailAndPassword(userAuth.email, userAuth.password).then(( {user} ) => {
      
    let newUser = new UsuarioBDD( user.uid, userAuth.name, user.email);

    return this.fireStore.collection("usuario").add({ ...newUser })

   })
  }

  loginUser(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password).then()
  }

  logout(){
    return this.auth.signOut();
  }

  isAuth(){
    return this.auth.authState.pipe(
      map( fbUSer =>  fbUSer != null )
    )
  }
}
