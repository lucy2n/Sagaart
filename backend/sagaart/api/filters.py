import django_filters

from artobjects.models import ArtObject, Category, Genre, Style


class ArtObjFilter(django_filters.FilterSet):
    end_cost = django_filters.NumberFilter(
        field_name="end_cost",
        lookup_expr="exact",
        label="Финальная цена"
    )
    size_category = django_filters.NumberFilter(
        field_name="size_category",
        label="Размер"
    )
    category = django_filters.ModelMultipleChoiceFilter(
        queryset=Category.objects.all(),
        field_name="category",
        label="Категория"
    )
    genre = django_filters.ModelMultipleChoiceFilter(
        queryset=Genre.objects.all(),
        field_name="genre",
        label="Жанр"
    )
    style = django_filters.ModelMultipleChoiceFilter(
        queryset=Style.objects.all(),
        field_name="style",
        label="Стиль"
    )
    years = django_filters.RangeFilter(
        field_name="year",
        label="Диапазон годов публикации"
    )
    author = django_filters.CharFilter(
        field_name='author__name',
        lookup_expr='icontains',
        label='Имя автора'
    )

    class Meta:
        model = ArtObject
        fields = (
            "end_cost",
            "size_category",
            "category",
            "genre",
            "style",
            "author",
            "years"
        )
