# TODO: Добавить этот метод в auth.views.UserViewSet

import os
from uuid import uuid4

import requests

SHOP_ID = os.getenv("SHOP_ID")
SECRET_KEY = os.getenv("SECRET_KEY")


def post_payment(price: int):
    uuid_key = str(uuid4())
    header = {
        "Authorization": {f"{SHOP_ID}": {SECRET_KEY}},
        "Idempotence-Key": f"{uuid_key}",
        "Content-Type": "application/json",
    }
    body = {
        "amount": {"value": f"{price}", "currency": "RUB"},
        "capture": True,
        "confirmation": {
            "type": "redirect",
            "return_url": "https://www.example.com/return_url",
        },
        "description": "<order-description>",
    }
