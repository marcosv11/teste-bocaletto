import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-quem-somos",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./quem-somos.component.html",
  styleUrl: "./quem-somos.component.css",
})
export class QuemSomosComponent implements OnInit {
  ngOnInit(): void {
    this.selectedIndex = 0;
  }

  menuItems = [{ title: "Dados cadastrais" }, { title: "Diferenciais" }];

  selectedIndex: number | null = null;

  selectItem(index: number, event: MouseEvent) {
    event.preventDefault();
    this.selectedIndex = index;
  }
}
