from django.shortcuts import HttpResponse, render

from tasks.models import Task


# Create your views here.
def task_list(request):
    total_tasks = Task.objects.all()
    return render(
        request,
        'tasks/task_list.html',
        {
            'total_tasks': total_tasks,
        },
    )


def done_list(request):
    return HttpResponse(request)


def pending_list(request):
    return HttpResponse(request)


def add_task(request):
    return HttpResponse(request)


def task_detail(request, slug: str):
    task = Task.objects.get(slug=slug)
    return render(request, 'tasks/task/detail.html', dict(task=task))


def toggle_task(request):
    return HttpResponse(request)


def edit_task(request):
    return HttpResponse(request)


def delete_task(request):
    return HttpResponse(request)
