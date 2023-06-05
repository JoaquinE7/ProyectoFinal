import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  public datos: jsjsjs[] = [
    {
      nombre: 'Joaquín Miguel Esquivel Meza',
      img1: 'assets/joaquin1.jpg',
      img2: '',
      resume: 'En conjunto con mis amigos realizamos este proyecto escolar sobre una página de reservaciones',
      linkF: 'https://www.facebook.com/joaquin.esquivel.399488',
      linkI: 'https://www.instagram.com/joaquin.esquivel02/',
    },
    {
      nombre: 'Emmanuel Caleb Pérez Estrada',
      img1: 'assets/caleb1.jpeg',
      img2: 'assets/caleb2.jpeg',
      resume: 'Mi nombre es Caleb. Soy estudiante de Ia carrera ISC en la UAA, me gusta jugar videojuegos',
      linkF: 'https://www.facebook.com/profile.php?id=100010317669917',
      linkI: 'https://www.instagram.com/p/BokizJ6lT0Q/?utm_source=ig_web_button_share_sheet',
    },
    {
      nombre: 'Ethienne Alejandro López Olvera', 
      img1: 'assets/ethienne1.jpeg',
      img2: '',
      resume: 'Nací, crecí, aun no me reproduzco y no he muerto.',
      linkF: 'https://www.facebook.com/ethienne.lopez.7/',
      linkI: 'https://www.instagram.com/ethienne_lopez/',
    },
    {
      nombre: 'Frank Elgar Delgado Araiza',
      img1: 'assets/frank1.jpeg',
      img2: 'assets/frank2.jpeg',
      resume: 'Sin mente para pensar, sin voluntad para romper, nacido de dios y del vacio...',
      linkF: 'https://www.facebook.com/Frank.E.Delgado.Araiza',
      linkI: 'https://www.instagram.com/frank.deaf/',
    },
    {
      nombre: 'José Gerardo Castro Benítez',
      img1: 'assets/gerardo1.jpg',
      img2: 'assets/Beeg_Sana.jpg',
      resume: 'Me gusta mimir',
      linkF: 'https://www.facebook.com/jose.casttrob',
      linkI: 'https://www.instagram.com/is_it_me_you.re_looking_for/',
    },
  ];

  getDatos(): jsjsjs[]{
    return this.datos
  }
}

export interface jsjsjs {
  nombre: string;
  img1: string;
  img2: string;
  resume: string;
  linkF: string;
  linkI: string;
}

