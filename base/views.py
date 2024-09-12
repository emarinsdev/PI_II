from django.shortcuts import render

# Create your views here.
from django.shortcuts import render  # Importa render

def index(request):
    return render(request, 'base.html')  # Certifique-se de que o nome do template está correto
