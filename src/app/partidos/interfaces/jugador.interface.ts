export interface Jugador {
  id?: string,
  nombre: string,
  foto?: string,
  ranking: number,
  partidos_jugados?: number,
  partidos_perdidos?: number,
  partidos_ganados? : number,
  puntos_ranking?:number,
  grupo: Grupos,
  puntos_ganados?: number,
  set_ganados?: number,
  pos_grupo? : number
}

export enum Grupos {
  grupo_a = "Grupo A",
  grupo_b = "Grupo B",
  grupo_c = "Grupo C",
  grupo_d = "Grupo D"
}
