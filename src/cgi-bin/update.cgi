#!/usr/bin/python3
# -*- encoding: utf-8 -*-

from create_txt import *

import os, cgi, sys, json

response = ""


def handle_get():
    global response
    skeleton = open("../layouts/skeleton.html")
    # placeholders in HTML file can be populated with information
    response += "Content-Type: text/html\n\n"
    response +=  skeleton.read().format(nav="Herzlich willkommen!", main="main")


def handle_post():
    global response
    incoming_json = json.load(sys.stdin)
    response += "Content-Type: text/plain\n\n"
    response += create_txt(incoming_json)

def handle_error():
    pass


# define function to be called on HTTP request type
paths = {
            "GET": handle_get,
            "POST": handle_post
        }


request_method = os.environ['REQUEST_METHOD']
if request_method in paths:
    # call request type handler
    paths[request_method]()
else:
    # if nothing was specified for the request type, return an error
    handle_error();


print(response)

