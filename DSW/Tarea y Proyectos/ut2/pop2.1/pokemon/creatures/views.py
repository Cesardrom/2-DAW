from django.shortcuts import render

from .models import Creature


# Create your views here.
def creature_list(request):
    creatures = Creature.objects.all()
    return render(request, 'creatures/creature_list.html', dict(creatures=creatures))


def creature_detail(request, slug: str):
    creature = Creature.objects.get(slug=slug)
    return render(request, 'creatures/creature_detail.html', dict(creature=creature))
