import { Component, Input, OnInit } from '@angular/core';
import { IResult, IVideoSnipet } from '../video-list/video-snipet.interface';

@Component({
  selector: 'video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {
  @Input() singleMovieData!: IResult;
  basePosterUrlPath: string = 'http://image.tmdb.org/t/p/w500/'
  posterUrlPath!: string;
  constructor() { }

  ngOnInit(): void {
    this.posterUrlPath = this.basePosterUrlPath + this.singleMovieData.poster_path;
  }

}
