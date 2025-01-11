package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) GetWeather(city string) *http.Response {

	api := "https://api.weatherapi.com/v1/current.json?"
	key := "key=4cd22e3f7c4343b69de84008241512"
	loc := fmt.Sprintf("&q=%s&aqi=no", city)

	res, err := http.Get(api + key + loc)
	if err != nil {
		log.Fatal(err)
	}
	
    return res
}
