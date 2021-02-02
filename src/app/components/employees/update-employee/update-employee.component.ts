import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../../service/employee.service';
import {Employee} from '../../../model/employee';
import {ActivatedRoute, Router} from '@angular/router';
import {DialogCreateEmployee} from "../create-employee/create-employee.component";
import {MatDialog} from "@angular/material/dialog";
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee  = new Employee();
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute,
              private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  onSubmit(): any{
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.dialog.open(DialogUpdateEmployee);
      this.goToEmployeeList();
    },
     error => console.log(error));
  }

  goToEmployeeList(): void{
    this.router.navigate(['/employees']);
  }
}
  @Component({
    selector: 'Dialog-Success',
    templateUrl: 'dialogUpdateEmployee.html',
  })

  export class DialogUpdateEmployee {}

