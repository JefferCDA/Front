import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() title = '';
  @Output() clicked= new EventEmitter();

constructor() { }

  ngOnInit(): void {
  }
  modalShow(){
    this.clicked.emit(null);
  }
}
