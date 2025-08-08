import { Component } from "@angular/core";
import { ServicosComponent } from "../servicos/servicos.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [ServicosComponent, CommonModule, RouterModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  openIndex: number | null = null;
  faqList = [
    {
      pergunta:
        "Quais são as vantagens de alugar impressoras, multifuncionais e scanners",
      resposta:
        "Você reduz custos, evita manutenção, tem suporte técnico incluso e acesso a equipamentos modernos.",
    },
    {
      pergunta: "Alugar uma impressora é mais barato que comprar?",
      resposta:
        "Sim, especialmente para empresas. Você evita custos iniciais altos e paga apenas pelo uso.",
    },
    {
      pergunta: "Quais são os diferenciais do nosso outsourcing de impressão?",
      resposta:
        "Monitoramento remoto, reposição automática de suprimentos, suporte técnico ágil e redução de desperdícios.",
    },
    {
      pergunta: "Como alugar uma impressora em SP?",
      resposta:
        "Entre em contato conosco, informando sua demanda. Nossa equipe vai indicar o melhor equipamento e cuidar da entrega.",
    },
    {
      pergunta:
        "Quem fica responsável pela manutenção dos equipamentos e troca de suprimentos?",
      resposta:
        "Toda a manutenção preventiva, corretiva e a troca de toners/cartuchos é realizada por um técnico especializado.",
    },
  ];

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }

  isOpen(index: number): boolean {
    return this.openIndex === index;
  }
}
