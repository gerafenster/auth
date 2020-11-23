import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'usuarios/:id',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'new-user',
    loadChildren: () => import('./new-user/new-user.module').then( m => m.NewUserPageModule)
  },
  {
    path: 'eventos/:id',
    loadChildren: () => import('./eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'new-evento',
    loadChildren: () => import('./new-evento/novo-evento.module').then( m => m.NovoEventoPageModule)
  },
  {
    path: 'participantes',
    loadChildren: () => import('./participantes/participantes.module').then( m => m.ParticipantesPageModule)
  },
  {
    path: 'novos-participantes/:idEvento/:pageTitulo',
    loadChildren: () => import('./novos-participantes/novos-participantes.module').then( m => m.NovosParticipantesPageModule)
  },
  {
    path: 'home-adm/:id',
    loadChildren: () => import('./home-adm/home-adm.module').then( m => m.HomeADMPageModule)
  },
  {
    path: 'home-users/:id',
    loadChildren: () => import('./home-users/home-users.module').then( m => m.HomeUsersPageModule)
  },
  {
    path: 'qrcode',
    loadChildren: () => import('./qrcode/qrcode.module').then( m => m.QrcodePageModule)
  },
  {
    path: 'meus-eventos/:idUser',
    loadChildren: () => import('./meus-eventos/meus-eventos.module').then( m => m.MeusEventosPageModule)
  },
  {
    path: 'evento-participante/:idEvento',
    loadChildren: () => import('./evento-participante/evento-participante.module').then( m => m.EventoParticipantePageModule)
  },
  {
    path: 'registros',
    loadChildren: () => import('./registros/registros.module').then( m => m.RegistrosPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./sobre/sobre.module').then( m => m.SobrePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
