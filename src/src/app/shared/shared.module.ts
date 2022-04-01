import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpRequestsService } from './services/http-requests.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [HttpRequestsService]
})
export class SharedModule { }
