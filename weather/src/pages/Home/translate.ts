type Language = "pt_br" | "en" | "sp";

export const translate = {
    geoNotSupported(language: Language) {
        return {
            "pt_br": "Seu navegador não suporta geolocalização",
            "en": "Your browser doesn't support geolocalization",
            "sp": "Tu navegador no soporta geolocalización"
        }[language]
    },

    geoRejected(language: Language) {
        return {
            "pt_br": "O usuário rejeitou a solicitação de geolocalização",
            "en": "User rejected geolocalization request",
            "sp": "Solicitud de geolocalización rechazada por el usuario"
        }[language]
    },

    geoUnavailable(language: Language) {
        return {
            "pt_br": "Localização indisponível",
            "en": "Position Unavailable",
            "sp": "Ubicación no disponible"
        }[language]
    },

    geoTimeOut(language: Language) {
        return {
            "pt_br": "O tempo expirou",
            "en": "Time out",
            "sp": "Tiempo expiró"
        }[language]
    },

    geoUnknownError(language: Language) {
        return {
            "pt_br": "Erro desconhecido",
            "en": "Unknown error",
            "sp": "Error desconocido"
        }[language]
    },

    useYourLocation(language: Language) {
        return {
            "pt_br": "Deseja usar sua localização?",
            "en": "Like use your localization?",
            "sp": "¿Quieres usar su ubicacion?"
        }[language]
    },

    inputCityName(language: Language) {
        return {
            "pt_br": "Digite o nome da cidade",
            "en": "Enter the city name",
            "sp": "Introduzca el nombre de la ciudad"
        }[language]
    },

    seeNextWeather(language: Language) {
        return {
            "pt_br": "Ver previsão para os próximos 5 dias",
            "en": "See forecast for the next 5 days",
            "sp": "Ver previsión para los próximos 5 días"
        }[language]
    },

    weatherToday(language: Language) {
        return {
            "pt_br": "Como está o tempo hoje?",
            "en": "How are weather today?",
            "sp": "¿Como está el tiempo hoy?"
        }[language]
    }
}