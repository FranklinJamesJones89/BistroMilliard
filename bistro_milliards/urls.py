'''Define URL patterns for bistro_milliards'''

from django.urls import path

from . import views

app_name = 'bistro_milliards'
urlpatterns = [
    # Home page
    path('', views.index, name='index')
]
