import { Component, OnInit } from '@angular/core';
import { DataminpService } from '../../dataminp.service';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [DatePipe, CommonModule, FormsModule],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionsComponent implements OnInit{

  constructor(private datamanip : DataminpService) { }

  collections : any[] = []
  ngOnInit() {
    this.collections = this.datamanip.getallcollections()
  }

}
