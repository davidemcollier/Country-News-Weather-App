import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

language;

currency;
population;
mapLink;
countryName;




  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

ionViewDidEnter(){
    this.countryName = this.navParams.get('countryName');
	this.population = this.navParams.get('population');
	
	this.mapLink = this.navParams.get('mapLink');	 
	this.language =  this.addToLangArray(this.navParams.get('language'));
	this.currency = this.addToCurArray(this.navParams.get('currency'));

}
    addToLangArray(language){
	let langArray = new Array();
	Object.keys(language).forEach(key => { 
	langArray.push(language[key]);	
	});	
	return langArray;
	}

    addToCurArray(currency){
	let currArray = new Array();
	Object.keys(currency).forEach(key => { 
	currArray.push(currency[key].name);
		});	
	return currArray;
	}



	


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
