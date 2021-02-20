import {Component, OnInit} from '@angular/core';
import {WebsiteService} from '../../../service/website.service';
import {Website} from '../../../model/website';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-update-website',
  templateUrl: './update-website.component.html',
  styleUrls: ['./update-website.component.css']
})
export class UpdateWebsiteComponent implements OnInit {

  id: number;
  websitteModel: Website = new Website();

  constructor(private websiteService: WebsiteService, private route: ActivatedRoute,
              private router: Router, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.websiteService.getById(this.id).subscribe(data => {
      this.websitteModel = data;
    }, error => console.log(error));
  }

  onSubmit(): any {
    this.websiteService.update(this.id, this.websitteModel).subscribe(data => {
        this.dialog.open(DialogUpdateWebsite);
        this.goToEmployeeList();
      },
      error => console.log(error));
  }

  goToEmployeeList(): void {
    this.router.navigate(['/websites']);
  }
}

@Component({
  selector: 'Dialog-Success',
  templateUrl: 'dialogUpdateWebsite.html',
})

export class DialogUpdateWebsite {
}

