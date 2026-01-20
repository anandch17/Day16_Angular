import { Component, OnInit } from '@angular/core';
import {Employee} from '../../../models/employee'
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-employees',
  standalone:true,
  imports: [DatePipe,CommonModule],
  templateUrl: './list-employees.html',
  styleUrl: './list-employees.css',
})
export class ListEmployees implements OnInit {

   showSecretMessage(name: string): void {
    alert(`Hello ${name}`);
  }

  onView(name: string): void {
    console.log('View clicked for:', name);
  }

employees:Employee[]=[
  {
    id:1,
    name:'Mark',
    gender:'Male',
    contactPreference:'Email',
    email:'mark@pragimtech.com',
    dateOfBirth:new Date('10/25/1988'),
    department:'IT',
    isActive:true,
    photoPath:'people2.jpeg'
  },
    {
    id:2,
    name:'Mary',
    gender:'Female',
    contactPreference:'Phone',
    phoneNumber:'2345978640',
    dateOfBirth:new Date('11/20/1979'),
    department:'HR',
    isActive:true,
    photoPath:'people1.jpeg'
  },
  {
    id:3,
    name:'John',
    gender:'Male',
    contactPreference:'Phone',
    phoneNumber:'5432978640',
    dateOfBirth:new Date('3/25/1976'),
    department:'IT',
    isActive:false,
    photoPath:'people3.jpeg'
  },
];
constructor(){ }

ngOnInit() {
    
}

}
