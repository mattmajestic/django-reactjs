# views.py
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def reactjs_endpoint(request):
    return Response({"message": "ReactJS Endpoint"})