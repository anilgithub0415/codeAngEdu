import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
@Input() recnm:string='garbage'
@Output() replacedNM=new EventEmitter<string>()


  constructor() { }

  ngOnInit(): void {
  }
  emitchange(data:string){
    this.replacedNM.emit(data)
  }
}
