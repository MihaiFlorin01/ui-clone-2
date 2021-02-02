import {Component, OnInit} from '@angular/core';
import {Employee} from '../../../model/employee';
import {EmployeeService} from '../../../service/employee.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  saveEmployee(): void {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.dialog.open(DialogCreateEmployee);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(): void{
    this.router.navigate(['/employees']);
  }

  onSubmit(): void {
    console.log(this.employee);
    this.saveEmployee();
}

}

@Component({
  selector: 'Dialog-Success',
  templateUrl: 'dialogCreateEmployee.html',
})

export class DialogCreateEmployee {}
