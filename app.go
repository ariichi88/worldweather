package main

import (
	"context"
	"fmt"
    "io"
	"log"
	"net/http"
	"encoding/json"
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

// my function
func (a *App) GetWeather(city string) map[string]interface{} {
	
     api := fmt.Sprintf("https://api.weatherapi.com/v1/current.json?key=4cd22e3f7c4343b69de84008241512&q=%s&aqi=no", city)
     resp, err := http.Get(api)
     if err != nil {
		 log.Fatal(err)
	 }
	 defer resp.Body.Close()

	 body, err := io.ReadAll(resp.Body)
	 if err != nil {
		 log.Fatal(err)
     }

     var data map[string]interface{}
	 err = json.Unmarshal(body, &data)
	 if err != nil {
		 log.Fatal(err)
     }

	 // マップの中にerrorキーがあるか検索
	 var key = "error"
     _, ok := data[key]
	 if ok {
		 data = nil
		 return data
	 } else {
         return data
	 }
}
