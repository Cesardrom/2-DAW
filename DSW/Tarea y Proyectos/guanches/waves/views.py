from django.shortcuts import HttpResponse


def edit_wave(request, id: int):
    return HttpResponse(request, id)


def delete_wave(request, id: int):
    return HttpResponse(request, id)
