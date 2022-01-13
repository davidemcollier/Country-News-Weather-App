import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { SettingsPage } from '../../pages/settings/settings';
import { NewsPage } from '../../pages/news/news';
import { ProfilePage } from '../../pages/profile/profile';

import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

cityChoice: string;
unitChoice: string = "";
countryName: string;
url: string = "https://restcountries.com/v3.1/capital/";
displayTitle: string = "No city selected";
hidden: boolean = true;
countryCode: string;
flagURL;
weatherApiURL= "https://api.weatherbit.io/v2.0/current?";
tempString: string;
latitude;
longitude;
weatherAPIkey = "&key=7dda1166dd34448ea848011fe1bec34f";

apiTemperature;
temperature;
unitChar: string;
wDesc: string;
windDir;
wIcon;
wImage;
myObj;
profileData;


   constructor(public navCtrl: NavController, private storage: Storage, public http: HttpClient, private sanitizer: DomSanitizer) {

   }

	
	
ionViewWillEnter(){
	this.hidden = true;
	
	
	//Following are nested observables within storage retrieval
	this.storage.get("settingsChoices")
	.then((val) => {
	
	if(val){
	this.myObj = JSON.parse(val);
	this.cityChoice = this.myObj.capital;
	this.cityChoice = this.cityChoice.charAt(0).toUpperCase() + this.cityChoice.slice(1);
	
	
	//Country API Call
	if(this.cityChoice != null){
		this.getGeoAPI().subscribe(data => {	
		this.hidden = false;
		this.profileData = data;
    	this.countryName = JSON.stringify(data[0].name.common);
		
		
		this.countryName = this.countryName.substring(1, this.countryName.length - 1);
		this.countryCode = JSON.stringify(data[0].cca2);
		this.countryCode = this.countryCode.substring(1, this.countryCode.length - 1);
		
		//Flag 
		this.flagURL = data[0].flags.png; //this.sanitizer.bypassSecurityTrustUrl(JSON.stringify(data[0].flags.png));
		
		this.displayTitle = "News & weather for " + this.cityChoice + ", " + this.countryName;
		
		//Weather Stuff
		//Latitude
		this.latitude = JSON.stringify(data[0].capitalInfo.latlng[0]);
    	
		//Longitude
		this.longitude = JSON.stringify(data[0].capitalInfo.latlng[1]);
		
				//Weather API Call
				this.getWeatherAPI().subscribe(wData => {
					this.apiTemperature = wData.data[0].temp;
					this.getTemp();
											
					this.wDesc = wData.data[0].weather.description;
					this.windDir = 	wData.data[0].wind_cdir_full;	
					this.wIcon = wData.data[0].weather.icon;
					 this.wImage = "https://www.weatherbit.io/static/img/icons/" + wData.data[0].weather.icon + ".png"; 						 
				});			
	}, error => this.displayTitle = this.cityChoice + error)};
	
	}

	})
	.catch((error) => {
		alert("An error has occured");		
	});	
}	


//Method to calculate temperature according to saved temperature metric
		getTemp(){
		if(this.myObj.unit === "metric") { 
		this.temperature= this.apiTemperature*1;
		this.unitChar = "m";}
		else if(this.myObj.unit === "scientific"){
		this.temperature=  this.apiTemperature+273.15;
		this.unitChar = "s";}
		else if(this.myObj.unit === "fahrenheit"){  ((this.temperature= this.apiTemperature*1.8)+32);
		this.unitChar = "i";}
		}		
	
	getWeatherAPI(): Observable<any>{	
	return this.http.get(this.weatherApiURL + "lat=" + this.latitude + "&lon=" + this.longitude + this.weatherAPIkey);	
	  }

	    getGeoAPI(): Observable<any>{	
	return this.http.get(this.url + this.cityChoice )
	.catch(this.errorHandler);  
	  }
	

//Error handling method
errorHandler(error: HttpErrorResponse){
return Observable.throw(" not found, try another city in Settings");
}
		

//Methods to sanitise the flag and weather image
	sanitizeImageUrl(): SafeUrl {
	    return this.sanitizer.bypassSecurityTrustUrl(this.flagURL);
	}
	
	sanitizeUrl(): SafeUrl {
	    return this.sanitizer.bypassSecurityTrustUrl(this.wImage);
	}
  
  
//Methods to open settings and news pages  
  openSettings(){
  this.navCtrl.push(SettingsPage);
  }
  
   openNews(){
  let data = {
  code: this.countryCode,
  countryName: this.countryName
  };
   this.navCtrl.push(NewsPage, data); 
   }  
  
  openProfile(){
     let data ={
	 countryName: this.countryName,
	 currency: this.profileData[0].currencies,
	 language: this.profileData[0].languages,
	 population: this.profileData[0].population,
	 mapLink:this.profileData[0].maps.googleMaps
	 };
  
  
  this.navCtrl.push(ProfilePage, data); }


}