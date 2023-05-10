# Hyperdefensiveness
from random import getrandbits, randint
from Crypto.Util.number import getPrime
import math

p = getPrime(512)
q = getPrime(512)
n = p * q
e = 7

m = "?"

assert m.startswith("sctf{") and m.endswith("}")

k = randint(0, 512)
b = randint(0, n)
cs = []

for x in m:
    y = (ord(x)<<k) + b
    cs.append(pow(y, e, n))

print(f"n = {n}")
print(f"e = {e}")
print(f"cs = {cs}")
