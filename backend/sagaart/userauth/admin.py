from django.contrib import admin

from userauth.models import User


class UserAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "email",
        "user_name",
        "telephone",
    )

    search_fields = (
        "id",
        "email",
        "user_name",
        "telephone",
    )

    empty_value_display = "Не задано"


admin.site.register(User, UserAdmin)
