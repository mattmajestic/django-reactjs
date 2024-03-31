from django.urls import path, re_path
from django.contrib import admin
from .schema_view import schema_view
from .views import reactjs_endpoint


urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('reactjs_endpoint/', reactjs_endpoint, name='reactjs_endpoint'),
]