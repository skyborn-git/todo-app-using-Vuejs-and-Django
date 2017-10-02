from django.conf import settings
from rest_framework import pagination
from rest_framework.response import Response


class CustomPagination(pagination.PageNumberPagination):

    def get_paginated_response(self, data):
        return Response({
            #'total': self.page.paginator.count,
            #'per_page': 10,
            #'current_page': self.get_current_page() ,
            #'last_page': self.page.paginator.num_pages,
            #'next_page_url': self.get_next_link(),
            #'prev_page_url': self.get_previous_link(),
            #'from': 0,
            #'to':11,
            'data': data
        })

    def get_current_page(self):
        if self.page.has_next():
            return self.page.next_page_number()
        else:
            return self.page.has_previous() and self.page.previous_page_number()+1 or 1
