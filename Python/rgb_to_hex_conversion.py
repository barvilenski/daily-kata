"""
Name: RGB To Hex Conversion
Level: 5kyu
Instructions: The rgb() method is incomplete. Complete the method so that passing
in RGB decimal values will result in a hexadecimal representation being returned.
The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that
fall out of that range should be rounded to the closest valid value.

The following are examples of expected output values:
rgb(255, 255, 255) # returns FFFFFF
rgb(255, 255, 300) # returns FFFFFF
rgb(0,0,0) # returns 000000
rgb(148, 0, 211) # returns 9400D3
"""

def rgb(r, g, b):
    r = max(0, min(r, 255))
    g = max(0, min(g, 255))
    b = max(0, min(b, 255))
    return "{:02X}{:02X}{:02X}".format(r, g, b)
