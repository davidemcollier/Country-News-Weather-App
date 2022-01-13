import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Storage} from '@ionic/storage';


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }
  
 
  unitChoice: string = "metric";
  capitalChoice: string = null;
  myStoredObj;
  
  metricChecked: boolean = true;
  scientificChecked: boolean = false;
  fahrenheitChecked: boolean = false;
  
  
  
  saveSettings(){
 
  let settingsData = {
  capital: this.capitalChoice,
  unit: this.unitChoice
  };
  
  
  
  if(this.capitalChoice!=null && this.capitalChoice!=""){
  this.storage.set("settingsChoices", JSON.stringify(settingsData) );
 this.navCtrl.pop();
  }
  else {
  alert("Please enter a city name or press back to exit.")
  }  
  }
  

  ionViewDidLoad() {
	this.storage.get("settingsChoices")
	.then((val) => {
		this.myStoredObj = JSON.parse(val);
		this.capitalChoice = this.myStoredObj.capital;
		this.setUnitchoice();
	})
	.catch((error) => {
		this.capitalChoice = null;
	});
  }
  
  
  setUnitchoice(){
if(this.myStoredObj.unit === "metric") {
	this.metricChecked = true;
    this.scientificChecked = false;
    this.fahrenheitChecked = false;
	}
else if(this.myStoredObj.unit === "scientific"){
	this.metricChecked = false;
    this.scientificChecked = true;
    this.fahrenheitChecked = false;
	}
else if(this.myStoredObj.unit === "fahrenheit"){
	this.metricChecked = false;
    this.scientificChecked = false;
    this.fahrenheitChecked = true;
	}
}
}
