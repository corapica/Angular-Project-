import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { LoginAuthService } from 'src/app/login-auth.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public user: any = {} ;
  public currentstatus: any ;
  public users: any = [];
  public loginuser: any = {};
  ismodal: boolean;

  public emailToDelete: String;
  public userToUpdate: any = {} ;

  // form = new FormGroup({
  //   firstName : new FormControl ('', Validators.required),
  //   lastName : new FormControl ('', Validators.required),
  //   email : new FormControl('', Validators.email),
  //   phoneNumber : new FormControl('', [Validators.required, Validators.minLength(8)]),
  //   role : new FormControl ('', Validators.required)
  // }) ;

  constructor(private userService: UserService, private router: Router, private authService: LoginAuthService,
     private toastr: ToastrService) {
    this.authService.isLoggedIn();
    this.loginuser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentstatus = this.authService.getStatus().subscribe(currentstatus => {
      this.currentstatus = this.currentstatus ;
    })
  }

  showRegistrationSuccess() {
    this.toastr.success('l\'utilisateur a été bien sauvegardé !', 'Succès');
  }

  showUpdateSuccess() {
    this.toastr.info('l\'utilisateur a été bien modifié !', 'Succès');
  }

  showDeleteSucess() {
    this.toastr.success('l\'utilisateur a été bien supprimé !', 'Succès');
  }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition skin-blue sidebar-mini';
    this.userService.getAllUsers(this.loginuser.token).subscribe(users => {
      this.users = users ;
    });
  }
  ngOnDestroy(): void {
    document.body.className = '';
}

  saveUser(user: any, userForm: any) {
    user.enabled = true ;
    user.managerMail = this.loginuser.user.email;
    this.users.push(user);
    this.userService.saveUser(user).subscribe((response) => {
      if (response) {
        console.log(response) ;
        userForm.reset();
       this.ismodal = true;
       this.userService.getAllUsers(this.loginuser.token).subscribe(users => {
        this.users = users ;
      });
      }
    });
  }
  getEmailToDelete(email) {
    this.emailToDelete = email;
  }

  getUserToUpdate(user) {
    this.userToUpdate = user;
  }

  deleteUser() {
    this.userService.deleteByEmail(this.loginuser.token, this.emailToDelete).subscribe((response) => {
    {
        this.userService.getAllUsers(this.loginuser.token).subscribe(users => {
        this.users = users ;
      });
      }
    });
  }
  updateUser( userToUpdate) {
    this.userService.updateUser(this.loginuser.token, userToUpdate).subscribe((response) => {
      {
          this.userService.getAllUsers(this.loginuser.token).subscribe(users => {
          this.users = users ;
        });
        }
      });
    }
  }
