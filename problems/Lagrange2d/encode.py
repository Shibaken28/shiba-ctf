from Crypto.Util.number import bytes_to_long
import random

def function(a,b,c,x):
    return a*x*x + b*x + c

flag = b"sctf{}"
a = random.randint(0,1<<32)
b = random.randint(0,1<<32)
c = bytes_to_long(flag)

print("[")
for i in range(3):
    x = random.randint(0,1<<32)
    print(f"[ {x} , {function(a,b,c,x)} ],")

print("]")
