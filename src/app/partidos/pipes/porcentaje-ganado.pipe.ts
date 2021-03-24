import { Pipe, PipeTransform } from '@angular/core';
import { Jugador } from '../interfaces/jugador.interface';

@Pipe({
  name: 'porcentajeGanado'
})
export class PorcentajeGanadoPipe implements PipeTransform {

  transform(jugador: Jugador): string {

    if (jugador.partidos_ganados == 0) {
      return "0%"
    }

    let porGanado =Math.ceil((jugador.partidos_ganados! / jugador.partidos_jugados!) * 100);



    return `${porGanado}%`;
  }

}
