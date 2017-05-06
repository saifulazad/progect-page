from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.
class IndexView(TemplateView):
    """
    This view used for bootstrapping front end

    it will provide index.html file which will bootstrap angularjs app
    """
    template_name = 'dist/index.html'