from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'bistro_milliards/index.html')

def dinnermenu(request):
    return render(request, 'bistro_milliards/dinnermenu.html')

def dessertmenu(request):
    return render(request, 'bistro_milliards/dessertmenu.html')

def contact(request):
    return render(request, 'bistro_milliards/contact.html')

def about(request):
    return render(request, 'bistro_milliards/about.html')
