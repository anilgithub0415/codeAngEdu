import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
@Input() name:string="Charles"
@Output() chgedNM=new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }
emitchgedNM(data:string){
  this.chgedNM.emit(data)
}


}
