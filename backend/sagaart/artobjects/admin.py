from django.contrib import admin

from .models import (
    Category,
    Style,
    Genre,
    Product,
    Author,
    AuthorAward,
    AuthorShow,
)


admin.site.empty_value_display = "Не задано"


class NameFieldAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)


@admin.register(Category)
class CategoryAdmin(NameFieldAdmin):
    pass


@admin.register(Style)
class StyleAdmin(NameFieldAdmin):
    pass


@admin.register(Genre)
class GenreAdmin(NameFieldAdmin):
    pass


@admin.register(AuthorAward)
class AuthorAwardAdmin(admin.ModelAdmin):
    pass


@admin.register(AuthorShow)
class AuthorShowAdmin(admin.ModelAdmin):
    pass


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    pass


@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    pass
