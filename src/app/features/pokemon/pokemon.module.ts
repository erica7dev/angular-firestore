import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonComponent } from './pokemon.component';
import { FormComponent } from './components/form/form.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    PokemonComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule
  ]
})
export class PokemonModule { }
