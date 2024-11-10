import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  topUsers: any[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getTopUsers().subscribe(
      (response) => {
        //console.log(response);
        this.topUsers = response.ranking;
        //console.log(this.topUsers);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
