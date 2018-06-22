# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse
from django.template import Context, loader

def index(request):
    context = Context({
            'message': 'Hello word'
        })
    return render(request, 'index.html', context)
