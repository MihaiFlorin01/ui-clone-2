import {Component, Inject, OnInit} from '@angular/core';
import {Employee} from '../../../model/employee';
import {EmployeeService} from '../../../service/employee.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

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
              private dialog: MatDialog,
              private dialogDeleteEmployee: DialogDeleteEmployee)
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

    });
  }
}

@Component({
  selector: 'Dialog-Success',
  templateUrl: '../employee-delete/dialogDeleteEmployee.html',
})

export class DialogDeleteEmployee{

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteEmployee>) {}

  no(): void {
    console.log('no');
    this.dialogRef.close();
  }

  yes(): boolean {
    console.log('yes');
    return true;
  }

}
