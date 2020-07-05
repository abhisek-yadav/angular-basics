import { PipeTransform, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Pipe({
  name: 'asyncpipe',
  pure: false
})
export class CustomAsyncPipe implements PipeTransform {

  responseData: any;

  constructor(private http: HttpClient) { }

  transform(url: string) {
    console.log('url: ' + url);
    this.http.get(url).subscribe((resp: any[]) => {
      console.log('responseData: ' + resp);
      this.responseData = resp;
    });

    return this.responseData;
  }

}
