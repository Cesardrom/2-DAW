from django.shortcuts import redirect, render
from django.utils.text import slugify

from tasks.models import Task

from .forms import AddTaskForm, EditTaskForm


# Create your views here.
def task_list(request):
    total_tasks = Task.objects.order_by('done')
    return render(
        request,
        'tasks/task_list.html',
        {
            'total_tasks': total_tasks,'complete': 1
        },
    )


def done_list(request):
    total_tasks = Task.objects.filter(done=True)
    return render(
        request,
        'tasks/task_list.html',
        {'total_tasks': total_tasks, 'complete': 2},
    )


def pending_list(request):
    total_tasks = Task.objects.filter(done=False)
    return render(
        request,
        'tasks/task_list.html',
        {'total_tasks': total_tasks, 'complete': 3},
    )


def add_task(request):
    if request.method == 'POST':
        if (form := AddTaskForm(request.POST)).is_valid():
            task = form.save(commit=False)
            task.slug = slugify(task.name)
            task.save()
            return redirect('tasks:task-list')
    else:
        form = AddTaskForm()
    return render(request, 'tasks/modified/add_task.html', dict(form=form))


def task_detail(request, slug: str):
    task = Task.objects.get(slug=slug)
    return render(request, 'tasks/task/detail.html', dict(task=task))


def toggle_task(request, slug: str):
    task = Task.objects.get(slug=slug)
    task.done = not task.done
    task.save()
    return redirect('tasks:task-list')


def edit_task(request, slug: str):
    task = Task.objects.get(slug=slug)
    if request.method == 'POST':
        if (form := EditTaskForm(request.POST, instance=task)).is_valid():
            task = form.save(commit=False)
            task.slug = slugify(task.name)
            task.save()
            return redirect('tasks:task-list')
    else:
        form = EditTaskForm(instance=task)
    return render(request, 'tasks/modified/edit_task.html', dict(task=task, form=form))


def delete_task(request, slug: str):
    task = Task.objects.get(slug=slug)
    task.delete()
    return redirect('tasks:task-list')
