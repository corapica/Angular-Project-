import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UploadService } from '../upload.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  profileForm: FormGroup ;
  error: string;
  fileUpload = {status: '', message: '', filePath: ''};
  selectedFile:  File = null;
  label: string;
  public loginuser: any = {};

  constructor(private fb: FormBuilder, private uploadService: UploadService, private http: HttpClient, private toastr: ToastrService) {
    this.loginuser = JSON.parse(localStorage.getItem('currentUser'));

  }

  showUploadSuccess() {
    this.toastr.success('La liste a été injecté avec succès !', 'Succès');
  }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition skin-blue sidebar-mini';

    this.profileForm = this.fb.group({
      name: [''],
      profile: [''],
      label: ['']
    });
  }

    ngOnDestroy(): void {
        document.body.className = '';
    }

    onUpload(){
      const formed = new FormData();
      formed.append('file', this.selectedFile, this.selectedFile.name);
      formed.append('label', this.label);

      const headers = new HttpHeaders({'Authorization': 'Bearer ' + this.loginuser.token});

      this.http.post('http://localhost:8080/upload', formed,  {headers: headers}).subscribe(
        res  => {
          console.log(res);
        }
      );
    }
    onSelectedFile(event){
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.profileForm.get('profile').setValue(file);
        this.selectedFile = <File>event.target.files[0];
        console.log(event);
    }
  }


  /* onSubmit(){
      const formData = new FormData();
      formData.append('name', this.profileForm.get('name').value);
      formData.append('profile', this.profileForm.get('profile').value);

      this.uploadService.upload(formData).subscribe(
        res => this.fileUpload = res,
        err => this.error = err
      )
    }*/
}
