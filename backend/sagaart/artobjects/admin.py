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


class NameFieldAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)


@admin.register(Style)
class StyleAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)


@admin.register(Genre)
class GenreAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)


@admin.register(AuthorAward)
class AuthorAwardAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)


@admin.register(AuthorShow)
class AuthorShowAdmin(admin.ModelAdmin):
    list_display = ("name", "year", "place")
    search_fields = ("name",)


@admin.register(ArtObject)
class ArtObjectAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "size", "is_published", "end_cost")
    list_filter = ("category", "style", "genre", "size_category", "author")
    search_fields = ("name",)
    list_display_links = ("name",)


@admin.register(ObjectAuthor)
class ObjectAuthorAdmin(admin.ModelAdmin):
    list_display = ("name", "personal_style")
    list_filter = ("personal_style",)
    search_fields = ("name",)
