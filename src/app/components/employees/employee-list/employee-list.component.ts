import {Component, Inject, OnInit} from '@angular/core';
import {Employee} from '../../../model/employee';
import {EmployeeService} from '../../../service/employee.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {DialogDeleteEmployee} from '../employee-delete/DialogDeleteEmployee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  employee: Employee;
  employees: Employee[];
  columnsToDisplay = ['firstName', 'lastName', 'emailId', 'actions', 'create_employee'];

  constructor(private employeeService: EmployeeService,
              private router: Router,
              private dialog: MatDialog)
  {}

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
    this.dialog.open(DialogDeleteEmployee).afterClosed().subscribe(result => {
     result = id
    });
    console.log(id);
  }
}
