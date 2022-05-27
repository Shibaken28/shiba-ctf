import enum
from re import I
from Crypto.Util.number import getPrime
import random

flag = "?"
assert flag.startswith("sctf{") and flag.endswith("}")
char = "abcdefghijklmnopqrstuvwxyz"

# padding
for _ in range(100+random.randint(1,100)):
    flag=random.choice(char)+flag
for _ in range(100+random.randint(1,100)):
    flag=flag+random.choice(char)


r = 1
enc = []

for i,c in enumerate(flag):
    r *= random.randint(1,1<<128)
    if r%4 == 0:
        enc.append(ord(c)+i)
    elif r%4 == 1:
        enc.append(ord(c)+i+1)
    elif r%4 == 2:
        enc.append(ord(c)-i)
    else:
        enc.append(ord(c)-i-1)

print(enc)
