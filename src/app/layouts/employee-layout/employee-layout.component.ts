import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-employee-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './employee-layout.component.html',
  styleUrl: './employee-layout.component.scss'
})
export class EmployeeLayoutComponent {}
