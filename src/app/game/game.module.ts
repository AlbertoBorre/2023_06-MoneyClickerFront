import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinComponent } from './coin/coin.component';
import { InvestComponent } from './invest/invest.component';
import { GameComponent } from './game/game.component';
import { BtnAtrasComponent } from './btn-atras/btn-atras.component';
import { RankingComponent } from './ranking/ranking.component';


@NgModule({
  declarations: [
    CoinComponent,
    InvestComponent,
    GameComponent,
    BtnAtrasComponent,
    RankingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoinComponent,
    InvestComponent,
    GameComponent
  ]
})
export class GameModule { }
