new WOW().init()

$(document).ready(function () {
    $('form').submit(function (event) {
        event.preventDefault()

        $.ajax({
            url: `https://api.weatherbit.io/v2.0/current?city=${$('#city_name').val()}&key=eeb1141ec7a343978c2b855849060c0c`,
            type: 'GET',
            dataType: 'JSON',
            success: function (resp) {
                resp = resp['data'][0]
                let src_ing = `https://www.weatherbit.io/static/img/icons/${resp['weather']['icon']}.png`

                $('#wind_spd').empty().append(parseInt(resp['wind_spd']))
                $('#app_temp').empty().append(parseInt(resp['app_temp']))
                $('#temp').empty().append(parseInt(resp['temp']))
                $('#icon').removeAttr('src').attr('src', src_ing)
                $('#city').empty().append($('#city_name').val())
                $('#rh').empty().append(resp['rh'])
                $('#city_name').val('')

            }
        })
    })
})