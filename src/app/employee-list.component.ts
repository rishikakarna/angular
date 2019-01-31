
import { Component } from '@angular/core';

@Component({
  selector: 'emp-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {

  title: string = "List of Employees";     //variable:data type = "your msg"
  employees: any[] = [        //any: any kind of data type allowed
    {
      "empno": 1,
      "name": "Mathaias",
      "salary": "1000",
      "dateOfJoining": "30-Dec-2017"
    },
    {
      "empno": 2,
      "name": "Melissa",
      "salary": "2000",
      "dateOfJoining": "25-Dec-2017"
    },
    {
      "empno": 3,
      "name": "Rochelle",
      "salary": "10",
      "dateOfJoining": "12-Dec-1984"
    },
    {
      "empno": 4,
      "name": "Lancelot",
      "salary": "9000",
      "dateOfJoining": "31-Dec-2012"
    },
    {
      "empno": 5,
      "name": "Lancy",
      "salary": "8000",
      "dateOfJoining": "15-Dec-2016"
    },
    {
      "empno": 6,
      "name": "Janet",
      "salary": "7000",
      "dateOfJoining": "29-Dec-2000"
    }
  ]
}