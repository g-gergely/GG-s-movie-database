import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpRequestsService } from 'src/app/shared/services/http-requests.service';
import { IResult, IVideoSnipet } from "src/app/video-viewer/video-list/video-snipet.interface";

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit, OnDestroy {
  videoSnipetList: IResult[] = [];
  http: HttpRequestsService;
  subscription!: Subscription;

  constructor(httpRequestService: HttpRequestsService) {
    this.http = httpRequestService;
   }

   ngOnInit(): void {
     this.loadVideoData(this.http.getVideoData());
    }

    ngOnDestroy(): void {
      if(this.subscription) {
        this.subscription.unsubscribe();
      }
    }

  loadVideoData(videoSnipets$: Observable<IVideoSnipet>) {
    this.subscription = videoSnipets$.subscribe((videoSnipets:IVideoSnipet) => {
      this.videoSnipetList = [...videoSnipets.results];
    });
  };

}
