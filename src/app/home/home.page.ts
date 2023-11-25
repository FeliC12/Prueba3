import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  items: any[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  addItem(item: any) {
    this.dataService.addItem(item);
  }

  updateItem(id: string, newData: any) {
    this.dataService.updateItem(id, newData);
  }

  deleteItem(id: string) {
    this.dataService.deleteItem(id);
  }
}
