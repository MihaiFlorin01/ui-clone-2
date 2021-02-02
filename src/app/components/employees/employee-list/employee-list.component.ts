import {Component, OnInit} from '@angular/core';
import {Employee} from '../../../model/employee';
import {EmployeeService} from '../../../service/employee.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  employee: Employee;
  employees: Employee[];
  columnsToDisplay = ['firstName', 'lastName', 'emailId', 'actions'];

  constructor(private employeeService: EmployeeService,
              private router: Router,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(): void {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
      // console.log(data);
    });
  }

  employeeDetails(id: number): void {
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number): void {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    });
  }
}

@Component({
  selector: 'Dialog-Success',
  templateUrl: 'dialogDeleteEmployee.html',
})

export class DialogDeleteEmployee{

  yes(): void {
    console.log('yes');
  }

  no(): void {
    console.log('no');
  }
}
