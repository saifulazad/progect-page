from django.conf.urls import include, url
from front_app.views import IndexView

urlpatterns = [
    url(r'^$', IndexView.as_view(), name='index')
]