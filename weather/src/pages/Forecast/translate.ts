type Language = "pt_br" | "en" | "sp";

export const translate = {
    seeNextWeather(language: Language) {
        return {
            "pt_br": "Previsão para 5 dias",
            "en": "Forecast for 5 days",
            "sp": "Previsión para 5 días"
        }[language]
    }  
}