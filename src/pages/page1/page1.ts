import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import * as Leaflet from "leaflet";

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  private _radius: number;
  private _latLng: any;
  private notificationText: string;
  private transitionType: string;
  private circle: any;
  private marker: any;
  private map: any;

  constructor(public navCtrl: NavController) {
    this._latLng = Leaflet.latLng(25.8938595, -80.1330216);
    //latitude: 25.8938595, longitude: -80.1330216, radius: 500,
  }

  ionViewDidLoad() {
    // this.menu.enable(false);
    // workaround map is not correctly displayed
    // maybe this should be done in some other event
    // setTimeout(this.loadMap, 100);
    console.log("view map loaded");
    setTimeout(this.loadMap.bind(this), 100);
  }

  loadMap() {
    let map = Leaflet.map('map');
    Leaflet.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGF0cmlja3IiLCJhIjoiY2l2aW9lcXlvMDFqdTJvbGI2eXUwc2VjYSJ9.trTzsdDXD2lMJpTfCVsVuA', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 13
    }).addTo(map);

    //web location
    map.locate({ setView: true});

    //when we have a location draw a marker and accuracy circle
    function onLocationFound(e) {
      var radius = e.accuracy / 2;

      Leaflet.marker(e.latlng).addTo(map)
          .bindPopup("You are within " + radius + " meters from this point").openPopup();

      Leaflet.circle(e.latlng, radius).addTo(map);
    }
    map.on('locationfound', onLocationFound);
    //alert on location error
    function onLocationError(e) {
      alert(e.message);
    }

    map.on('locationerror', onLocationError);
    
  }

  onMapClicked(e) {
    this._latLng = e.latlng;
  }

}
