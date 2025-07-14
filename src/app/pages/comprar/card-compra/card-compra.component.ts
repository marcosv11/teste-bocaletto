import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-card-compra",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./card-compra.component.html",
  styleUrl: "./card-compra.component.css",
})
export class CardCompraComponent {
  @Input() produto: any;
}
