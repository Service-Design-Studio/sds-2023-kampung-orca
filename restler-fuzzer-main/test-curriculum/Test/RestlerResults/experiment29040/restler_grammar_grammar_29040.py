""" THIS IS AN AUTOMATICALLY GENERATED FILE!"""
from __future__ import print_function
import json
from engine import primitives
from engine.core import requests
from engine.errors import ResponseParsingException
from engine import dependencies
req_collection = requests.RequestCollection([])
# Endpoint: /topic, method: Get
request = requests.Request([
    primitives.restler_static_string("GET "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("topic"),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: localhost:3002\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),

],
requestId="/topic"
)
req_collection.add_request(request)

# Endpoint: /topic, method: Post
request = requests.Request([
    primitives.restler_static_string("POST "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("topic"),
    primitives.restler_static_string("?"),
    primitives.restler_static_string("topic_id="),
    primitives.restler_fuzzable_string("fuzzstring", quoted=False),
    primitives.restler_static_string("&"),
    primitives.restler_static_string("title="),
    primitives.restler_fuzzable_string("fuzzstring", quoted=False),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: localhost:3002\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),

],
requestId="/topic"
)
req_collection.add_request(request)

# Endpoint: /topic/{topic_id}, method: Get
request = requests.Request([
    primitives.restler_static_string("GET "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("topic"),
    primitives.restler_static_string("/"),
    primitives.restler_fuzzable_string("fuzzstring", quoted=False),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: localhost:3002\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),

],
requestId="/topic/{topic_id}"
)
req_collection.add_request(request)

# Endpoint: /topic/{topic_id}, method: Delete
request = requests.Request([
    primitives.restler_static_string("DELETE "),
    primitives.restler_basepath(""),
    primitives.restler_static_string("/"),
    primitives.restler_static_string("topic"),
    primitives.restler_static_string("/"),
    primitives.restler_fuzzable_string("fuzzstring", quoted=False),
    primitives.restler_static_string(" HTTP/1.1\r\n"),
    primitives.restler_static_string("Accept: application/json\r\n"),
    primitives.restler_static_string("Host: localhost:3002\r\n"),
    primitives.restler_refreshable_authentication_token("authentication_token_tag"),
    primitives.restler_static_string("\r\n"),

],
requestId="/topic/{topic_id}"
)
req_collection.add_request(request)
