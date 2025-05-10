import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(
    public db: DatabaseService,
  ) {
    /*this.db.addFirestoreDocument('cards',{
      title: 'Avatar',
      year: 2009,
      director: 'James Cameron',
      actors: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
      plot: 'In the year 2154, humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system.',
      genre: ['Action', 'Adventure', 'Fantasy'],
      rating: 7.8
    }).then((res) => {
      console.log('Document written with ID: ', res.id);
    }).catch((error) => {
      console.error('Error adding document: ', error);
    });

    this.db.fetchFirestoreCollection('movies')
    .subscribe((res:any) => {console.log('respuesta', res);},
      (error) => {
        console.error('Error fetching collection: ', error);}
    
    )}

/* loadcities(){
  let listCities = [
    { name: 'La Paz', latitude: -16.500000, longitude: -68.150002 },
    { name: 'Santa Cruz', latitude: -17.783333, longitude: -63.183334 },
    { name: 'Cochabamba', latitude: -17.383333, longitude: -66.150002 },
    { name: 'Sucre', latitude: -19.033333, longitude: -65.262222 },
    { name: 'Oruro', latitude: -17.983333, longitude: -67.150002 },
    { name: 'Potosí', latitude: -19.583333, longitude: -65.750000 },
    { name: 'Tarija', latitude: -21.533333, longitude: -64.733330 },
    { name: 'Trinidad', latitude: -14.833333, longitude: -64.900002 },
    { name: 'Cobija', latitude: -11.033333, longitude: -68.733330 }
  ];
  listCities.forEach((city:any)=>{
    this.db.addFirestoreDocument('cities', city)
    .then((res)=>{

    })
  })*/
   //COLECCION DE CARTAS
  let cards = [
      {
        name: 'Kadeton',
        image: 'https://example.com/images/kadeton.jpg',
        technique: 'Graffiti',
        type: 'Shiny',
        year: 2023,
        address: 'Av. Arce, Sopocachi, La Paz, Bolivia'
      },
      {
        name: 'Shon',
        image: 'https://example.com/images/shon.jpg',
        technique: 'Stencil',
        type: 'Normal',
        year: 2022,
        address: 'Calle Linares, Centro, La Paz, Bolivia'
      },
      {
        name: 'Khespy',
        image: 'https://example.com/images/khespy.jpg',
        technique: 'Mural',
        type: 'Shiny',
        year: 2021,
        address: 'Calle Illampu, San Pedro, La Paz, Bolivia'
      },
      {
        name: 'Craneos Rojos',
        image: 'https://example.com/images/craneos.jpg',
        technique: 'Cartel',
        type: 'Normal',
        year: 2020,
        address: 'Av. Busch, Miraflores, La Paz, Bolivia'
      },
      {
        name: 'Ale Spam',
        image: 'https://example.com/images/alespam.jpg',
        technique: 'Sticker',
        type: 'Shiny',
        year: 2024,
        address: 'Calle Comercio, Centro, La Paz, Bolivia'
      },
      {
        name: '1BS',
        image: 'https://example.com/images/1bs.jpg',
        technique: 'Graffiti',
        type: 'Normal',
        year: 2023,
        address: 'Av. Camacho, Centro, La Paz, Bolivia'
      },
      {
        name: 'Bless1',
        image: 'https://example.com/images/bless1.jpg',
        technique: 'Stencil',
        type: 'Shiny',
        year: 2022,
        address: 'Av. Buenos Aires, Villa Fátima, La Paz, Bolivia'
      },
      {
        name: 'HxC',
        image: 'https://example.com/images/hxc.jpg',
        technique: 'Mural',
        type: 'Normal',
        year: 2023,
        address: 'Calle México, Centro, La Paz, Bolivia'
      },
      {
        name: 'Perro Negro',
        image: 'https://example.com/images/perro-negro.jpg',
        technique: 'Sticker',
        type: 'Shiny',
        year: 2021,
        address: 'Calle 21 de Calacoto, Zona Sur, La Paz, Bolivia'
      },
      {
        name: 'Mat21',
        image: 'https://example.com/images/mat21.jpg',
        technique: 'Graffiti',
        type: 'Normal',
        year: 2020,
        address: 'Av. 20 de Octubre, Sopocachi, La Paz, Bolivia'
      },
    ];
  /*cards.forEach(card => {
    this.db.addFirestoreDocument('cards', card)
      .then(res => console.log('Carta añadida con ID:', res.id))
      .catch(err => console.error('Error:', err));
  }); */ 
  let events = [
    {
      description: 'Evento mural en Sopocachi, con artistas destacados de la zona.',
      cards: [
        { name: 'Kadeton', latitude: -16.509565, longitude: -68.123917 },
        { name: 'Shon', latitude: -16.497386, longitude: -68.138364 },
        { name: 'Khespy', latitude: -16.23717, longitude: -68.85063 },
        { name: 'Craneos Rojos', latitude: -16.498, longitude: -68.121 },
        { name: 'Ale Spam', latitude: -16.5, longitude: -68.133 },
        { name: '1BS', latitude: -16.474893, longitude: -68.239617 },
        { name: 'Bless1', latitude: -16.5, longitude: -68.133 },
        { name: 'HxC', latitude: -16.5, longitude: -68.133 },
        { name: 'Perro Negro', latitude: -17.2826209, longitude: -68.6355054 },
        { name: 'Mat21', latitude: -16.5, longitude: -68.133 }
      ]
    }
  ];

  /* events.forEach(event => {
    this.db.addFirestoreDocument('events', event)
      .then(res => console.log('Evento guardado con ID:', res.id))
      .catch(error => console.error('Error guardando evento:', error));
  }); */
  let artspots = [
    { name: 'Kadeton', latitude: -16.509565, longitude: -68.123917 },
        { name: 'Shon', latitude: -16.497386, longitude: -68.138364 },
        { name: 'Khespy', latitude: -16.23717, longitude: -68.85063 },
        { name: 'Craneos Rojos', latitude: -16.498, longitude: -68.121 },
        { name: 'Ale Spam', latitude: -16.5, longitude: -68.133 },
        { name: '1BS', latitude: -16.474893, longitude: -68.239617 },
        { name: 'Bless1', latitude: -16.5, longitude: -68.133 },
        { name: 'HxC', latitude: -16.5, longitude: -68.133 },
        { name: 'Perro Negro', latitude: -17.2826209, longitude: -68.6355054 },
        { name: 'Mat21', latitude: -16.5, longitude: -68.133 }
  ];
   /* artspots.forEach(e => {
    this.db.addFirestoreDocument('artspots', e)
      .then(res => console.log('Ubicación guardada con ID:', res.id))
      .catch(error => console.error('Error guardando ubicación:', error));
  }); */

}


}     

