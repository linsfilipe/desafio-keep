import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentesService {

  private baseUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.httpClient.post(`${this.baseUrl}/api/v1/agentes/upload-files`, formData).subscribe(res => {
    });
  }

  upload(file: File) :Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.httpClient.post(`${this.baseUrl}/api/v1/agentes/upload-files`, file, {
      reportProgress: true,
      observe: 'events'
    });
  }

}
