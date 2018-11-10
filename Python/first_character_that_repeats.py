"""
Name: First character that repeats
Level: 6kyu
Description: Find the first character that repeats in a String and return that
character. This is not the same as finding the character that repeats first. In
that case, an input of 'tweet' would yield 'e'.
Examples:
first_dup('tweet') => 't'
first_dup('like') => None
"""

from collections import OrderedDict

def first_dup(text):
    dict = OrderedDict()

    # count the occurrences of the characters
    for char in text:
        if char in dict:
            dict[char] += 1
        else:
            dict[char] = 1

    # find and return the first character that repeats
    for char in dict:
        if dict[char] > 1:
            return char
    return None
