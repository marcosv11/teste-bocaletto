import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { produtos } from "../../shared/components/products/produtos";

@Component({
  selector: "app-comprar-detalhes",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./comprar-detalhes.component.html",
  styleUrl: "./comprar-detalhes.component.css",
})
export class ComprarDetalhesComponent {
  produto: any;
  mensagemWhatsApp: string = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.produto = produtos.find((p) => p.id === id);
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (this.produto) {
      const texto = `Olá, gostaria de consultar o valor do ${this.produto.nome}`;
      this.mensagemWhatsApp = encodeURIComponent(texto);
    }
  }
}
