//import { DialogoComponent } from './components/pages/dialogo/dialogo.component';
import { NewNoteCardComponent } from './components/pages/new-note-card/new-note-card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { TranslateComponent } from './components/pages/translate/translate.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'translate', component: TranslateComponent},
  {path: 'new-note-card', component: NewNoteCardComponent},
  //{path: 'dialogo', component: DialogoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
