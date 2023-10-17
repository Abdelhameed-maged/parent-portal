import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DefaultService } from 'src/app/api';
import { MessageService } from 'primeng/api';
import store from 'store2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private defaultService: DefaultService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.defaultService.loginPost(this.loginForm.value)
      .subscribe({
        next: (res) => {
          store.add('token', res.token);
          this.router.navigateByUrl('/home');
        },
        error: (error: HttpErrorResponse) => {
          console.log(error)
          this.messageService.add({ severity: 'error', summary: 'Invalid', detail: error.error.error })
          this.loading = false;
        }
      });
  }
}
