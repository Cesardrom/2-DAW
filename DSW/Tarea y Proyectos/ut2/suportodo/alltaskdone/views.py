from django.shortcuts import redirect, render
from django.utils.text import slugify

from alltaskdone.models import Task

from .forms import AddTaskForm


def home(request):
    total_tasks = Task.objects.count()
    tasks = Task.objects.all()
    return render(request, 'alltaskdone/home.html', {'total_tasks': total_tasks, 'tasks': tasks})


def task_detail(request, task_slug: str):
    task = Task.objects.get(slug=task_slug)
    return render(request, 'alltaskdone/tasks/task.html', dict(task=task))


def add_task(request):
    if request.method == 'POST':
        if (form := AddTaskForm(request.POST)).is_valid():
            task = form.save(commit=False)
            task.slug = slugify(task.title)
            task.save()
            return redirect('alltaskdone:created-task')
    else:
        form = AddTaskForm()
    return render(request, 'alltaskdone/task_option/add_task.html', dict(form=form))


def created_task(request, task_title: str):
    task = Task.objects.get(title=task_title)
    return render(request, 'alltaskdone/task_option/created_task.html', dict(task=task))
