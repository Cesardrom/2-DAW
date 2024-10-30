from django.shortcuts import HttpResponse, redirect, render

from .forms import AddEchoForm
from .models import Echo


def echo_list(request):
    echos = Echo.objects.all()
    return render(request, 'echos/timeline.html', dict(echos=echos))


def add_echo(request):
    if request.method == 'POST':
        if (form := AddEchoForm(request.POST)).is_valid():
            echo = form.save(commit=False)
            echo.user = request.user
            echo.save()
            return redirect('echos:echo-list')
    else:
        form = AddEchoForm()

    return render(request, 'echos/modifiers/add_echo.html', dict(form=form))


def echo_detail(request, id: int):
    echo = Echo.objects.get(id=id)
    return render(request, 'echos/echo_detail.html', dict(echo=echo))


def delete_echo(request, id: int):
    return HttpResponse(request, id)


def edit_echo(request, id: int):
    pass


def add_wave(request, id: int):
    return HttpResponse(request, id)


def wave_detail(request, id: int):
    return HttpResponse(request)
