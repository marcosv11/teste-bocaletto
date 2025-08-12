import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class FormspreeService {
  private endpoint = "https://formspree.io/f/xldlzgln"; // troque pelo seu

  async sendProduct(data: {
    product_name: string;
    category: string;
    image_url: string;
    description: string;
  }) {
    const res = await fetch(this.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...data,
        subject: `Novo produto: ${data.product_name}`,
        message: `Produto enviado com sucesso, o cadastro será feito até 00.`,
      }),
    });
    if (!res.ok) throw new Error("Falha ao enviar o e-mail");
    return res.json();
  }
}
