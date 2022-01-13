webpackJsonp([3],{

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.url = "https://newsapi.org/v2/top-headlines?country=";
        this.pageSize = "&pageSize=5";
        this.apiKey = "&apiKey=d76d8d8d81e2403c821babfd0e8f1932";
        this.articles = [];
    }
    NewsPage.prototype.ionViewDidLoad = function () {
    };
    NewsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.countryCode = this.navParams.get('code');
        this.countryName = this.navParams.get('countryName');
        this.getNewsAPI().subscribe(function (data) {
            _this.articles = data.articles;
            if (_this.articles.length == 0) {
                _this.newsDisplayTitle = "No News from " + _this.countryCode;
            }
            else {
                _this.newsDisplayTitle = "News from " + _this.countryCode;
            }
        });
    };
    NewsPage.prototype.getNewsAPI = function () {
        return this.http.get(this.url + this.countryCode + this.pageSize + this.apiKey);
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"/Users/davidcollier/Desktop/MobileAppsExs/proj/g00398259/src/pages/news/news.html"*/'<!--\n  Generated template for the NewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>News</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<h2>{{newsDisplayTitle}}</h2>\n\n<ion-list>\n<ion-item *ngFor="let item of articles">\n	<a href={{item.url}} ><img style="width: 100px; height: 100px;" src={{item.urlToImage}}></a>\n	<br>\n	<a href={{item.url}} >{{item.title}}</a>\n	<br>\n	<a href={{item.url}}>{{item.description}}</a>\n	</ion-item >\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/davidcollier/Desktop/MobileAppsExs/proj/g00398259/src/pages/news/news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidEnter = function () {
        this.countryName = this.navParams.get('countryName');
        this.population = this.navParams.get('population');
        this.mapLink = this.navParams.get('mapLink');
        this.language = this.addToLangArray(this.navParams.get('language'));
        this.currency = this.addToCurArray(this.navParams.get('currency'));
    };
    ProfilePage.prototype.addToLangArray = function (language) {
        var langArray = new Array();
        Object.keys(language).forEach(function (key) {
            langArray.push(language[key]);
        });
        return langArray;
    };
    ProfilePage.prototype.addToCurArray = function (currency) {
        var currArray = new Array();
        Object.keys(currency).forEach(function (key) {
            currArray.push(currency[key].name);
        });
        return currArray;
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/davidcollier/Desktop/MobileAppsExs/proj/g00398259/src/pages/profile/profile.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Profile for {{countryName}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n	 <h4>Currency:</h4> \n	 <h3 *ngFor="let x of currency">{{x}}</h3>\n	 <br>\n	 <h4>Language:</h4> \n	 <h3 *ngFor="let x of language">{{x}}</h3>\n	  <br>\n	 <h4>Population:</h4> \n	 <h3>{{population  | number : fractionSize}}</h3>\n	  <br>\n	 <a href={{mapLink}}><button ion-button>View on Google Maps</button></a>\n\n</ion-content>\n'/*ion-inline-end:"/Users/davidcollier/Desktop/MobileAppsExs/proj/g00398259/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.unitChoice = "metric";
        this.capitalChoice = null;
        this.metricChecked = true;
        this.scientificChecked = false;
        this.fahrenheitChecked = false;
    }
    SettingsPage.prototype.saveSettings = function () {
        var settingsData = {
            capital: this.capitalChoice,
            unit: this.unitChoice
        };
        if (this.capitalChoice != null && this.capitalChoice != "") {
            this.storage.set("settingsChoices", JSON.stringify(settingsData));
            this.navCtrl.pop();
        }
        else {
            alert("Please enter a city name or press back to exit.");
        }
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get("settingsChoices")
            .then(function (val) {
            _this.myStoredObj = JSON.parse(val);
            _this.capitalChoice = _this.myStoredObj.capital;
            _this.setUnitchoice();
        })
            .catch(function (error) {
            _this.capitalChoice = null;
        });
    };
    SettingsPage.prototype.setUnitchoice = function () {
        if (this.myStoredObj.unit === "metric") {
            this.metricChecked = true;
            this.scientificChecked = false;
            this.fahrenheitChecked = false;
        }
        else if (this.myStoredObj.unit === "scientific") {
            this.metricChecked = false;
            this.scientificChecked = true;
            this.fahrenheitChecked = false;
        }
        else if (this.myStoredObj.unit === "fahrenheit") {
            this.metricChecked = false;
            this.scientificChecked = false;
            this.fahrenheitChecked = true;
        }
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/davidcollier/Desktop/MobileAppsExs/proj/g00398259/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<p>City</p>\n<ion-input [(ngModel)]="capitalChoice"></ion-input>\n<hr>\n\n\n <h2>Settings</h2>\n\n<hr>\n\n  <p>Units:</p>\n\n   \n\n<ion-list radio-group  [(ngModel)]="unitChoice">\n\n\n    <ion-item>\n      <ion-label>Scientific</ion-label>\n      <ion-radio value="scientific" [checked]="scientificChecked"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Metric</ion-label>\n      <ion-radio value="metric" [checked]="metricChecked" ></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Fahrenheit</ion-label>\n      <ion-radio value="fahrenheit" [checked]="fahrenheitChecked"></ion-radio>\n    </ion-item>\n</ion-list>\n\n<button ion-button  (click)="saveSettings()"> SAVE</button>\n</ion-content>\n'/*ion-inline-end:"/Users/davidcollier/Desktop/MobileAppsExs/proj/g00398259/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/news/news.module": [
		678,
		2
	],
	"../pages/profile/profile.module": [
		679,
		1
	],
	"../pages/settings/settings.module": [
		680,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 208;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_news_news__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, storage, http, sanitizer) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.http = http;
        this.sanitizer = sanitizer;
        this.unitChoice = "";
        this.url = "https://restcountries.com/v3.1/capital/";
        this.displayTitle = "No city selected";
        this.hidden = true;
        this.weatherApiURL = "https://api.weatherbit.io/v2.0/current?";
        this.weatherAPIkey = "&key=7dda1166dd34448ea848011fe1bec34f";
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.hidden = true;
        //Following are nested observables within storage retrieval
        this.storage.get("settingsChoices")
            .then(function (val) {
            if (val) {
                _this.myObj = JSON.parse(val);
                _this.cityChoice = _this.myObj.capital;
                _this.cityChoice = _this.cityChoice.charAt(0).toUpperCase() + _this.cityChoice.slice(1);
                //Country API Call
                if (_this.cityChoice != null) {
                    _this.getGeoAPI().subscribe(function (data) {
                        _this.hidden = false;
                        _this.profileData = data;
                        _this.countryName = JSON.stringify(data[0].name.common);
                        _this.countryName = _this.countryName.substring(1, _this.countryName.length - 1);
                        _this.countryCode = JSON.stringify(data[0].cca2);
                        _this.countryCode = _this.countryCode.substring(1, _this.countryCode.length - 1);
                        //Flag 
                        _this.flagURL = data[0].flags.png; //this.sanitizer.bypassSecurityTrustUrl(JSON.stringify(data[0].flags.png));
                        _this.displayTitle = "News & weather for " + _this.cityChoice + ", " + _this.countryName;
                        //Weather Stuff
                        //Latitude
                        _this.latitude = JSON.stringify(data[0].capitalInfo.latlng[0]);
                        //Longitude
                        _this.longitude = JSON.stringify(data[0].capitalInfo.latlng[1]);
                        //Weather API Call
                        _this.getWeatherAPI().subscribe(function (wData) {
                            _this.apiTemperature = wData.data[0].temp;
                            _this.getTemp();
                            _this.wDesc = wData.data[0].weather.description;
                            _this.windDir = wData.data[0].wind_cdir_full;
                            _this.wIcon = wData.data[0].weather.icon;
                            _this.wImage = "https://www.weatherbit.io/static/img/icons/" + wData.data[0].weather.icon + ".png";
                        });
                    }, function (error) { return _this.displayTitle = _this.cityChoice + error; });
                }
                ;
            }
        })
            .catch(function (error) {
            alert("An error has occured");
        });
    };
    //Method to calculate temperature according to saved temperature metric
    HomePage.prototype.getTemp = function () {
        if (this.myObj.unit === "metric") {
            this.temperature = this.apiTemperature * 1;
            this.unitChar = "m";
        }
        else if (this.myObj.unit === "scientific") {
            this.temperature = this.apiTemperature + 273.15;
            this.unitChar = "s";
        }
        else if (this.myObj.unit === "fahrenheit") {
            ((this.temperature = this.apiTemperature * 1.8) + 32);
            this.unitChar = "i";
        }
    };
    HomePage.prototype.getWeatherAPI = function () {
        return this.http.get(this.weatherApiURL + "lat=" + this.latitude + "&lon=" + this.longitude + this.weatherAPIkey);
    };
    HomePage.prototype.getGeoAPI = function () {
        return this.http.get(this.url + this.cityChoice)
            .catch(this.errorHandler);
    };
    //Error handling method
    HomePage.prototype.errorHandler = function (error) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(" not found, try another city in Settings");
    };
    //Methods to sanitise the flag and weather image
    HomePage.prototype.sanitizeImageUrl = function () {
        return this.sanitizer.bypassSecurityTrustUrl(this.flagURL);
    };
    HomePage.prototype.sanitizeUrl = function () {
        return this.sanitizer.bypassSecurityTrustUrl(this.wImage);
    };
    //Methods to open settings and news pages  
    HomePage.prototype.openSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */]);
    };
    HomePage.prototype.openNews = function () {
        var data = {
            code: this.countryCode,
            countryName: this.countryName
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_news_news__["a" /* NewsPage */], data);
    };
    HomePage.prototype.openProfile = function () {
        var data = {
            countryName: this.countryName,
            currency: this.profileData[0].currencies,
            language: this.profileData[0].languages,
            population: this.profileData[0].population,
            mapLink: this.profileData[0].maps.googleMaps
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */], data);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/davidcollier/Desktop/MobileAppsExs/proj/g00398259/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      G00398259\n    </ion-title>\n	<ion-buttons end>\n	<button><ion-icon name="settings" (click)="openSettings()"></ion-icon></button>\n</ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h2>{{displayTitle}}  </h2>\n  \n  <div [hidden]="hidden">\n  	\n	<img height="50" [src]="sanitizeImageUrl()">\n	<hr>\n\n	 <h4>Temperature: </h4>\n	<h3> {{temperature}} ({{unitChar}})</h3>\n	\n\n	 <h4>Weather:</h4> \n	 <h3>{{wDesc}}</h3>\n<img [src]="sanitizeUrl()">\n\n <h4>Wind From:</h4> \n <h3>{{windDir}}</h3>\n	\n	\n	<button ion-button (click)="openNews()">News</button>\n	<button ion-button (click)="openProfile()">Country Profile</button>\n	\n  </div>\n  \n  \n</ion-content>\n'/*ion-inline-end:"/Users/davidcollier/Desktop/MobileAppsExs/proj/g00398259/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(355);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_news_news__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(257);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/davidcollier/Desktop/MobileAppsExs/proj/g00398259/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/davidcollier/Desktop/MobileAppsExs/proj/g00398259/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[350]);
//# sourceMappingURL=main.js.map