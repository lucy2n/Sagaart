from django.contrib import admin

from .models import (
    Category, Style, Genre, ArtObject, ObjectAuthor, AuthorAward, AuthorShow
    )

admin.site.empty_value_display = "Не задано"


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)


@admin.register(Style)
class StyleAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)


@admin.register(Genre)
class GenreAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)


@admin.register(AuthorAward)
class AuthorAwardAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)


@admin.register(AuthorShow)
class AuthorShowAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)


@admin.register(ArtObject)
class ProductAdmin(admin.ModelAdmin):
    pass


@admin.register(ObjectAuthor)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)