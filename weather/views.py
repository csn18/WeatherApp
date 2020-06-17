import requests
from django.shortcuts import render
from .models import CityName


def main(request):
    api = 'eeb1141ec7a343978c2b855849060c0c'

    if request.method == 'POST':
        city = request.POST.get('city_name')
        print(city)
    else:
        city = 'Kazan'

    response = requests.get(f'https://api.weatherbit.io/v2.0/current?city={city}&key={api}').json()['data'][0]
    all_info = {
        'city': city,
        'temp': int(response['temp']),
        'app_temp': int(response['app_temp']),
        'icon': response['weather']['icon'],
        'wind_spd': int(response['wind_spd']),
        'rh': response['rh'],
    }

    context = {
        'info': all_info,
        'cities': CityName.objects.all()
    }

    return render(request, 'weather/main.html', context)
