import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { FirebaseService } from 'src/app/shared/services/firebase/firebase.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements AfterViewInit {
  @ViewChild('usuariosCanvas') usuariosCanvas!: ElementRef;
  @ViewChild('reservacionCanvas') reservacionCanvas!: ElementRef;
  @ViewChild('devolucionCanvas') devolucionCanvas!: ElementRef;

  usuariosChart: Chart | undefined;
  reservacionChart: Chart | undefined;
  devolucionChart: Chart | undefined;
  reservaciones: any;
  mesR: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  constructor(private bd: FirebaseService) {}

  ngAfterViewInit() {
    this.bd
      .getall()
      .snapshotChanges()
      .pipe(
        map((change) =>
          change.map((c) => ({
            id: c.payload.key,
            user: c.payload.val().user,
            peli: c.payload.val().peli,
            mesr: c.payload.val().mesR,
            mesd: c.payload.val().mesD,
            ...c.payload.val(),
          }))
        )
      )
      .subscribe((data) => {
        this.reservaciones = data;
        console.log(this.reservaciones);

        // Actualizar los datos de las gráficas con los obtenidos de Firebase
        this.updateChartsWithData();
      });
  }

  updateChartsWithData() {
    this.createUsuariosChart();
    this.createReservacionChart();
    this.createDevolucionChart();
  }

  createUsuariosChart() {
    const usuariosCanvas = this.usuariosCanvas.nativeElement;
    const usuariosCtx = usuariosCanvas.getContext(
      '2d'
    ) as CanvasRenderingContext2D;

    const users = this.reservaciones.map(
      (reservacion: any) => reservacion.user
    );
    const usuariosPorPelicula: any = {};

    for (let i = 0; i < users.length; i++) {
      const user = users[i];

      if (!usuariosPorPelicula[user]) {
        usuariosPorPelicula[user] = 0;
      }

      usuariosPorPelicula[user] += 1;
    }

    const labels = Object.keys(usuariosPorPelicula);
    const data = labels.map((user) => usuariosPorPelicula[user]);

    this.usuariosChart = new Chart(usuariosCtx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Películas reservadas',
            data: data,
            backgroundColor: 'rgba(255, 165, 0, 255)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: 'x',
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      }
    });
  }

  createReservacionChart() {
    const reservacionCanvas = this.reservacionCanvas.nativeElement;
    const reservacionCtx = reservacionCanvas.getContext('2d') as CanvasRenderingContext2D;
  
    const mesesReservacion = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const reservacionesPorMes = new Array(12).fill(0);
  
    for (const reservacion of this.reservaciones) {
      const mesIndex = parseInt(reservacion.mesR, 10) - 1;
      reservacionesPorMes[mesIndex]++;
    }
  
    const labels = mesesReservacion;
    const data = reservacionesPorMes;
  
    this.reservacionChart = new Chart(reservacionCtx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Mes de Reservación',
            data: data,
            backgroundColor: 'rgba(64, 224, 208, 255)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: 'x',
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
        scales: {
          y: {
            max: Math.max(...data) + 1,
          },
        },
      },
    });
  }  

  createDevolucionChart() {
    const devolucionCanvas = this.devolucionCanvas.nativeElement;
    const devolucionCtx = devolucionCanvas.getContext('2d') as CanvasRenderingContext2D;
  
    const mesesDevolucion = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const devolucionesPorMes = new Array(12).fill(0);
  
    for (const devolucion of this.reservaciones) {
      const mesIndex = parseInt(devolucion.mesD, 10) - 1;
      devolucionesPorMes[mesIndex]++;
    }
  
    const labels = mesesDevolucion;
    const data = devolucionesPorMes;
  
    this.devolucionChart = new Chart(devolucionCtx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Mes de Devolución',
            data: data,
            backgroundColor: 'rgba(0, 255, 0, 255)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: 'x',
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
        scales: {
          y: {
            max: Math.max(...data) + 1,
          },
        },
      },
    });
  }  
}
