#!/usr/bin/python3
# -*- encoding: utf-8 -*-

#import create_txt

import os, cgi, cgitb
cgitb.enable()
form = cgi.FieldStorage()

response = ""


def handle_get():
    global response
    skeleton = open("../layouts/skeleton.html")
    # placeholders in HTML file can be populated with information
    response += "Content-Type: text/html\n\n"
    response +=  skeleton.read().format(nav="Herzlich willkommen!", main=form)


def handle_post():
    global response
    response += "Content-Type: text/html\n\n"
    res = ""
    for f in form:
        res += f + ' = ' + form[f].value + '\n'
    response += res 


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
