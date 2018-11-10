"""
Name: First non-repeating character
Level: 5kyu
Instructions: Write a function named firstNonRepeatingLetter that takes a string
input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since
the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same
character, but the function should return the correct case for the initial letter.
For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return the empty string ("").

Note: the function is called firstNonRepeatingLetter for historical reasons,
but your function should handle any Unicode character.
"""

from collections import OrderedDict

def first_non_repeating_letter(string):
    dict = OrderedDict()

    for char in string:
        if (char.lower() in dict):
            dict[char.lower()] += 1
        elif (char.upper() in dict):
            dict[char.upper()] += 1
        else:
            dict[char] = 1

    for char in dict:
        if dict[char] == 1:
            return char
    return ""
