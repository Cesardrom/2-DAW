from django.shortcuts import HttpResponse


def echo_list(request):
    return HttpResponse(request)


def add_echo(request):
    return HttpResponse(request)


def echo_detail(request, id: int):
    return HttpResponse(request, id)


def delete_echo(request, id: int):
    return HttpResponse(request, id)


def add_wave(request, id: int):
    return HttpResponse(request, id)


def wave_detail(request, id: int):
    return HttpResponse(request)
