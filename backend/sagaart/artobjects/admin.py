from django.contrib import admin

from .models import (
    Category,
    Style,
    Genre,
    ArtObject,
    ObjectAuthor,
    AuthorAward,
    AuthorShow,
)

admin.site.empty_value_display = "Не задано"


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(Style)
class StyleAdmin(admin.ModelAdmin):
    pass


@admin.register(Genre)
class GenreAdmin(admin.ModelAdmin):
    pass


@admin.register(AuthorAward)
class AuthorAwardAdmin(admin.ModelAdmin):
    pass


@admin.register(AuthorShow)
class AuthorShowAdmin(admin.ModelAdmin):
    pass


@admin.register(ArtObject)
class ArtObjectAdmin(admin.ModelAdmin):
    pass


@admin.register(ObjectAuthor)
class ObjectAuthorAdmin(admin.ModelAdmin):
    pass
