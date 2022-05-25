from Crypto.Util.number import bytes_to_long
import random

def function(a,b,c,x):
    return a*x*x + b*x + c

flag = b"?"
a = random.randint(0,3000)
b = random.randint(0,3000)
c = random.randint(0,3000)
f = bytes_to_long(flag)
print(f"f(flag) = {function(a,b,c,f)}")

# I'm so kind that I give you the hint
x = random.randint(0,1<<16)
print(f"x = {x}")
print(f"f(x) = {function(a,b,c,x)}")
