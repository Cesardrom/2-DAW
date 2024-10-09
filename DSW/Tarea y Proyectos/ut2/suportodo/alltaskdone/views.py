from django.shortcuts import render

from alltaskdone.models import Task


def home(request):
    finished_tasks = Task.objects.filter(done=True).count()
    unfinished_tasks = Task.objects.filter(done=False).count()
    tasks = Task.objects.all()
    return render(
        request,
        'alltaskdone/home.html',
        {'finished_tasks': finished_tasks, 'unfinished_tasks': unfinished_tasks, 'tasks': tasks},
    )


def task_detail(request, task_slug: str):
    task = Task.objects.get(slug=task_slug)
    return render(request, 'alltaskdone/task/task.html', dict(task=task))
