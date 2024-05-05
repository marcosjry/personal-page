import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { AxiosResponse } from 'axios';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-third-section',
  standalone: true,
  imports: [NgFor,
    NgIf
  ],
  templateUrl: './third-section.component.html',
  styleUrl: './third-section.component.scss'
})
export class ThirdSectionComponent implements GithubService {
  repos: any[] = [];
  constructor(private githubService: GithubService) {

  }
  getRepos(username: string): Promise<AxiosResponse<any, any>> {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
      this.githubService.getRepos('marcosjry')
          .then(response => {
            this.repos = response.data.filter((repo: { description: any; }) => repo.description);
          })
          .catch(error => {

            console.error(error);
          })
  }
}

