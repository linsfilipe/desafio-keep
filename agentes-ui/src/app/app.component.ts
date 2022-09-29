import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { concatMap, from, Observable, Observer } from 'rxjs';
import { AgentesService } from './shared/services/agentes.service';
import { LoadingService } from './shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'agentes-web';

  loading$ = this.loader.loading$;

  constructor(public loader: LoadingService) {
  }


}
