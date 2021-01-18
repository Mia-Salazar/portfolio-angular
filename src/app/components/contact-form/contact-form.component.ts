import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  private siteCode = '6Lc2ejEaAAAAAL6E9iR8KOmpKW7Gbolvuw_b556R';
  nameInput: string;
  email: string;
  message: string;
  recaptcha: string;
  loading: boolean = false;
  error: boolean = false;
  @Input() title: string;
  @Input() name: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getRecaptcha() {
    return this.siteCode;
  }

  addHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json' 
    })
  }

  resolved(captcha: string) {}

  submit(form: NgForm, recaptcha) {
    this.loading = true;
    this.error = false;
    if (form.status !== 'INVALID' && recaptcha.valid) {
      return this.http.post('https://formspree.io/f/mwkwerqj', {
        name: this.name,
        _replyto: this.email,
        message: this.message
      },
      {headers: this.addHeader()}).subscribe( r => {
        console.log(r, 'erre')
        this.loading = false;
        form.reset();
      }, e => {
        console.log(e, 'e')
        this.error = true;
        this.loading = false;
      })
    } else {
      this.error = true;
      this.loading = false;
      form.reset();
    }
  }
}
