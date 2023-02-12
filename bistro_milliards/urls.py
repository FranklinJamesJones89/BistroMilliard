'''Define URL patterns for bistro_milliards'''

from django.urls import path

from . import views

app_name = 'bistro_milliards'
urlpatterns = [
    # Home page
    path('', views.index, name='index'),
    # Dinner menu
    path('dinnermenu', views.dinnermenu, name='dinnermenu'),
    # Dessert menu
    path('dessertmenu', views.dessertmenu, name='dessertmenu'),
    # Contact page
    path('contact', views.contact, name='contact'),
    # About page
    path('about', views.about, name='about')
]
