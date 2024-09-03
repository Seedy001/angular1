import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {


  userEmail : string = 'boulette@gmail.com';


  constructor(private router: Router) {}
  
  onContinue() {
    this.router.navigateByUrl('facesnaps')
  }

  onSubmitForm(form: NgForm): void{
    console.log(form.value);
  }
}
