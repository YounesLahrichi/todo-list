import { Component } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      The title is: {{title}}
    </p>
    
  `,
  
  styleUrls: ['./input-button-unit.component.scss']
})


export class InputButtonUnitComponent {
  title = 'Hello World';

  constructor() { 
    this.changeTitle('My First Angular App');
  }
  
  changeTitle(newTitle: string){
    this.title = newTitle;
  }

  ngOnInit(): void { 
    this.title = 'Angular CLI Rules!';
  }
}
