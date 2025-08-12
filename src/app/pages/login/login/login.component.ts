import { CommonModule } from "@angular/common";
import { Component, ViewEncapsulation } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xldlzgln"; // ⬅️ troque pelo seu ID

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  private readonly PASSWORD = "bocaletto2025";

  loggedIn = false;
  loginError = "";

  sending = false;
  sent = false;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  passwordForm = this.fb.group({
    password: ["", Validators.required],
  });

  productForm = this.fb.group({
    name: ["", [Validators.required, Validators.maxLength(80)]],
    category: ["", [Validators.required, Validators.maxLength(50)]],
    imageUrl: [
      "",
      [Validators.required, Validators.pattern(/^https?:\/\/.+/i)],
    ],
    description: ["", [Validators.required, Validators.maxLength(500)]],
  });

  onLogin() {
    this.loginError = "";
    const pass = (this.passwordForm.value.password || "").trim();
    if (pass === this.PASSWORD) {
      this.loggedIn = true;
      this.passwordForm.reset();
    } else {
      this.loginError = "Senha incorreta.";
    }
  }

  async submitProduct() {
    this.submitted = true;
    this.sent = false;

    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    this.sending = true;

    // monta o payload pro e-mail
    const data = {
      product_name: this.productForm.value.name!,
      category: this.productForm.value.category!,
      image_url: this.productForm.value.imageUrl!,
      description: this.productForm.value.description!,
      subject: `Novo produto: ${this.productForm.value.name}`,
      message: "Produto enviado com sucesso, o cadastro será feito até 00.",
    };

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Falha ao enviar o e-mail");

      this.sent = true; // ✅ mostra mensagem de sucesso
      this.productForm.reset(); // limpa o form
      this.submitted = false;
    } catch (e) {
      console.error(e);
      alert("Não foi possível enviar o e-mail. Tente novamente.");
    } finally {
      this.sending = false;
    }
  }
}
