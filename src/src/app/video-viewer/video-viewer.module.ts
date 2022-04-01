import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from './video-list/video-list.component';
import { HttpRequestsService } from '../shared/services/http-requests.service';
import {MatButtonModule} from '@angular/material/button';
import { VideoCardComponent } from './video-card/video-card.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    VideoListComponent,
    VideoCardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [VideoListComponent],
  providers: [HttpRequestsService]
})
export class VideoViewerModule { }
