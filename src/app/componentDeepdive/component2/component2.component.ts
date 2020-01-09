import { Component, Input,EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component {
  @Input() public parentData;

  @Output() public childEvent= new EventEmitter();


  // today: number = Date.now();

  fireEvent(){
    this.childEvent.emit('hey code');
  }

}
  


