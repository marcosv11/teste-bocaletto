// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { HomeComponent } from './pages/home/home.component';
import { ComprarComponent } from './pages/comprar/comprar.component';
import { AlugarComponent } from './pages/alugar/alugar.component';
import { AssistenciaTecnicaComponent } from './pages/assistencia-tecnica/assistencia-tecnica.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ServicosComponent } from './pages/servicos/servicos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // acesso raiz
  { path: 'home', component: HomeComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'comprar', component: ComprarComponent },
  { path: 'alugar', component: AlugarComponent },
  { path: 'assistencia-tecnica', component: AssistenciaTecnicaComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'servicos', component: ServicosComponent },

  { path: '**', redirectTo: '/home' }, // qualquer rota errada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
