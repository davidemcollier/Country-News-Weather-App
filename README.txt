PROJECT TITLE: 
Ionic Country, Weather & News Reader


INTRODUCTION:
Using REST APIs, this application allows the user to select enter a capital city and choice of system of measurement (i.e. metric, imperial, scientific) which are then stored in the app. Navigating through the home, news and profile pages, the user may then review current weather data, latest news articles and a country profile. 
Implemented using Ionic with Angular.


DESCRIPTION OF KEY FUNCTIONALITIES:

	When first starting the application, the user arrives on the homepage with no data to display. They must navigate to the settings page via the gear icon. 
On the settings page, a city name may be entered (using the restcountries.com API, this needs to be a capital city) and choose from a radio button selection a system of measurement (metric selected already by default). The user may navigate back to the homepage or, once enter a capital city name (and specifying a choice of system of measurement) and input their preferences via the save button (thus navigating back to the home screen). 

If the user hits 'Save' without entering a city, they will be prompted to address this. Otherwise, if the city name is not found in the Rest API, upon returning to the home screen, a message will display indicating that the city name is not found. 

If the city is valid, the home screen will display temperature data, the country name, a flag icon, a current weather icon and current wind direction. Underneath, a News and Profile button will be displayed also.

The Profile button, once clicked, navigates to the profile page where formatted information about population, currency and languages is displayed. 

The News page, once clicked, displays the five most popular news articles with clickable title, descriptive caption and image all of which navigate to the external site hosting the article. If the API does not supply information relating to the chosen country, a message displays alerting to this.


APIs Used:
newsapi.org
weatherbit.io
restcountries.com
