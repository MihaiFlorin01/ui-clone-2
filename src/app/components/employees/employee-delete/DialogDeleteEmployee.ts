import {Component, Inject} from '@angular/core';
import {EmployeeService} from '../../../service/employee.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'Dialog-Success',
  templateUrl: '../employee-delete/dialogDeleteEmployee.html',
  styleUrls: ['./DialogDeleteEmployee.css']
})

export class DialogDeleteEmployee{

  constructor(public employeeService: EmployeeService,
              public dialogRef: MatDialogRef<DialogDeleteEmployee>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  no(): void {
    console.log('no');
    this.dialogRef.close(true);
  }

  yes(): void {
    this.employeeService.deleteEmployee(1);
  }
}
