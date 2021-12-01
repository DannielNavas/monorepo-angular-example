import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'avvillas-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
  monorepo: FormGroup;
  title = 'libreinversion';
  constructor(private fb: FormBuilder) {
    this.monorepo = this.fb.group({
      miprimercampo: [''],
    });
  }
  onSubmit() {
    console.log(this.monorepo.value);
  }
}
