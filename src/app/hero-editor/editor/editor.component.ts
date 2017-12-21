import { Component, OnInit, TemplateRef  } from '@angular/core';
import { Hero } from '../../shared/Domain/Hero';
import { HeroService } from '../../shared/services/hero.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  hero;
  modalRef: BsModalRef;
  
  constructor(private heroService: HeroService, private modalService: BsModalService) { }
 
  ngOnInit() {
    this.hero = this.heroService.getSelectedHero();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
 
}
