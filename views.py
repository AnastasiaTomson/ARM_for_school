from django.shortcuts import render


def index(request):
    return render(request, 'index.html')


def add_staff(request):
    return render(request, 'add_staff.html')
