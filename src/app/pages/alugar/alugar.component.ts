import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-alugar",
  standalone: true,
  imports: [],
  templateUrl: "./alugar.component.html",
  styleUrl: "./alugar.component.css",
})
export class AlugarComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
