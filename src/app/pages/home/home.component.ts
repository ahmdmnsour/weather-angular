import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private weatherData: any = {};

  cityName: string = 'cairo';

  tempC: number | undefined;
  tempF: number | undefined;
  temp: number | undefined;
  notes: any = [];
  condition: string | undefined;
  unit: string = 'C';
  weatherIcon: string | undefined;
  unitToggleText: string = 'F';

  constructor(private service: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getWeatherDate(this.cityName);
  }

  toggleUnit() {
    if (this.unit === 'C') {
      this.unit = 'F';
      this.temp = this.tempF;
      this.unitToggleText = 'C';
    } else {
      this.unit = 'C';
      this.temp = this.tempC;
      this.unitToggleText = 'F';
    }
  }

  searchWeather() {
    this.getWeatherDate(this.cityName);
  }

  getWeatherDate(cityName: string) {
    this.service.getWeatherData(cityName)
      .subscribe(res => {
        this.weatherData = res;
        this.cityName = this.weatherData['location']['city'];
        this.tempC = this.weatherData['current']['temp_c'];
        this.tempF = this.weatherData['current']['temp_f'];
        this.weatherIcon = this.weatherData['current']['condition']['icon'];
        this.notes = this.weatherData.notes;
        this.temp = this.tempC;
      }, err => {
        console.log(err);
        if (err.status == 403) {
          this.router.navigate(['unauthorized']);
        }
      });

    
  }
}
