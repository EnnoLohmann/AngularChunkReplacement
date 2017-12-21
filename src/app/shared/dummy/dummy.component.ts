import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  constructor(private heroService: HeroService, private modalService: BsModalService ) { }

  ngOnInit() {
  }

}
