from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'bistro_milliards/index.html')

def dinnermenu(request):
    return render(request, 'bistro_milliards/dinnermenu.html')

