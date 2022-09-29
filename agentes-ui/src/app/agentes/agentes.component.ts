import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentesService } from '../shared/services/agentes.service';

@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.scss']
})
export class AgentesComponent implements OnInit {

  uploadFiles: Array<File> = [];
  files: Array<any> = [];

  constructor(private agentesService: AgentesService, 
              protected router: Router) {
  }

  ngOnInit(): void {
    this.files.push(new FormData());
  }

  readFile(file: File) {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onloadend = function(){
      let xmlData = reader.result as string;
      let parser = new DOMParser();
      console.log(parser.parseFromString(xmlData, "text/xml"));
  };
  }

  upload() {
    this.uploadFiles.forEach(f => {
      this.readFile(f);
      this.agentesService.uploadFile(f);
    });
    this.router.navigate(['/agentes']);
  }

  addFileToUpload(event: any) {
      this.uploadFiles.push(event?.target?.files[0]);
  }

  addNewFileItem() {
    this.files.push(new FormData());
  }

  removeFile(index: number) {
    this.files.splice(index, 1);
  }

}
