from rest_framework import serializers
from .models import *


# class CategorySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Categories
#         fields = ('name',)

class OptionSerializer(serializers.ModelSerializer):
    # question = QuestionSerializer()

    class Meta:
        model = Options
        fields = ('id','question','choice','isTrue','answer',)

class QuestionSerializer(serializers.ModelSerializer):
    # category=CategorySerializer()
    choice = OptionSerializer(read_only=True, many=True)
    class Meta:
        model = Questions
        fields = ('id','question','choice',)


# class AnswerSerializer(serializers.ModelSerializer):
#
#     class Meta:
#         model = Answer
#         fields = ('id', 'question', 'choice','answer')
