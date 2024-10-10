from django.shortcuts import render

from alltaskdone.models import Task


def home(request):
    total_tasks = Task.objects.count()
    tasks = Task.objects.all()
    return render(request, 'alltaskdone/home.html', {'total_tasks': total_tasks, 'tasks': tasks})


def task_detail(request, task_slug: str):
    task = Task.objects.get(slug=task_slug)
    return render(request, 'alltaskdone/task/task.html', dict(task=task))
