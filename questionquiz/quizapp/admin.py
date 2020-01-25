from django.contrib import admin
# Register your models here.
from django.contrib import admin
from .models import *

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)

class QuestionAdmin(admin.ModelAdmin):
    list_display = ('question',)

class OptionAdmin(admin.ModelAdmin):
    list_display = ('question','choice','isTrue','answer')

# class AnswerAdmin(admin.ModelAdmin):
#     list_display = ('question','choice','answer',)




admin.site.register(Categories, CategoryAdmin)
admin.site.register(Questions,QuestionAdmin)
admin.site.register(Options,OptionAdmin)
# admin.site.register(Answer,AnswerAdmin)